"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import ThemeImage from "@/ui/ThemeImage";
import AsciiEffectDemo from "@/ui/AsciiEffectDemo";

const LOOPS_FORM_ACTION =
  "https://app.loops.so/api/newsletter-form/cmksjrb07207v0iyr8e6bfowy";
const LOOPS_RATE_LIMIT_KEY = "loops-form-timestamp";
const LOOPS_RATE_LIMIT_MS = 60_000;

export default function WaitlistHero() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedEmail = email.trim();
    if (!trimmedEmail || isSubmitting) {
      return;
    }

    const now = Date.now();
    const previousTimestamp = localStorage.getItem(LOOPS_RATE_LIMIT_KEY);
    if (
      previousTimestamp &&
      Number(previousTimestamp) + LOOPS_RATE_LIMIT_MS > now
    ) {
      setErrorMessage("Too many signups, please try again in a little while.");
      return;
    }

    localStorage.setItem(LOOPS_RATE_LIMIT_KEY, String(now));
    setErrorMessage("");
    setIsSubmitting(true);

    const formBody = `userGroup=&mailingLists=&email=${encodeURIComponent(trimmedEmail)}`;

    try {
      const response = await fetch(LOOPS_FORM_ACTION, {
        method: "POST",
        body: formBody,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });

      if (response.ok) {
        router.push("/en/registration-successful");
        return;
      }

      let message = response.statusText;
      try {
        const data = (await response.json()) as { message?: string };
        if (data?.message) {
          message = data.message;
        }
      } catch {
        // Keep fallback status text when response is not JSON.
      }

      setErrorMessage(message || "Oops! Something went wrong, please try again.");
    } catch (error) {
      const message =
        error instanceof Error && error.message
          ? error.message === "Failed to fetch"
            ? "Too many signups, please try again in a little while."
            : error.message
          : "Oops! Something went wrong, please try again.";
      setErrorMessage(message);
      localStorage.setItem(LOOPS_RATE_LIMIT_KEY, "");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="mx-auto flex w-full max-w-[760px] flex-col items-center px-4 pb-[128px] pt-0 text-center md:px-6">
      <div className="flex w-full flex-col items-center">
        <div className="pt-[128px]">
          <AsciiEffectDemo effect="waveField" size={220} className="mb-16" />
        </div>

        <h1 className="type-h1 text-[var(--text-strong)]">Coming soon</h1>
        <p className="type-paragraph mt-4 max-w-[620px] text-[var(--text-muted)]">
          We&apos;re putting the final touches on something new. Join the
          waitlist. Access rolls out in batches, and spots open as we go.
        </p>

        <div className="mt-8 w-full max-w-[400px]">
          <label htmlFor="waitlist-email" className="sr-only">
            Email address
          </label>
          <form onSubmit={handleSubmit} className="relative">
            <input
              id="waitlist-email"
              name="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              autoComplete="email"
              placeholder="Your email..."
              className="h-14 w-full rounded-full border border-[var(--waitlist-input-border)] bg-[var(--waitlist-input-bg)] pl-4 pr-14 text-[14px] font-normal text-[var(--waitlist-input-text)] outline-none placeholder:text-[14px] placeholder:text-[var(--waitlist-input-placeholder)]"
            />
            <button
              type="submit"
              aria-label="Submit waitlist email"
              disabled={isSubmitting}
              className="absolute right-2 top-1/2 inline-flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-[var(--waitlist-send-bg)] disabled:cursor-not-allowed disabled:opacity-70"
            >
              <ThemeImage
                lightSrc="/brand/up-arrow-send-white.svg"
                darkSrc="/brand/up-arrow-send-black.svg"
                alt="Send"
                width={12}
                height={12}
              />
            </button>
          </form>
          {errorMessage ? (
            <p className="type-paragraph mt-2 text-left text-[12px] leading-[1.4] text-[var(--text-muted)]">
              {errorMessage}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}




