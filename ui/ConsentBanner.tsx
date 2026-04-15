"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import PrimaryButton from "@/ui/PrimaryButton";
import SecondaryButton from "@/ui/SecondaryButton";

const CONSENT_STORAGE_KEY = "krellix-consent-v1";
const PRIVACY_CHOICES_TRIGGER_SELECTOR = "[data-open-privacy-choices]";

interface StoredConsent {
  analytics: boolean;
  updatedAt: string;
  version: number;
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

function readStoredConsent(): StoredConsent | null {
  try {
    const rawConsent = window.localStorage.getItem(CONSENT_STORAGE_KEY);

    if (!rawConsent) {
      return null;
    }

    const parsedConsent = JSON.parse(rawConsent) as Partial<StoredConsent>;

    if (typeof parsedConsent.analytics !== "boolean") {
      return null;
    }

    return {
      analytics: parsedConsent.analytics,
      updatedAt:
        typeof parsedConsent.updatedAt === "string"
          ? parsedConsent.updatedAt
          : new Date().toISOString(),
      version: 1,
    };
  } catch {
    return null;
  }
}

function applyConsentToGoogle(analytics: boolean) {
  if (typeof window.gtag !== "function") {
    return;
  }

  window.gtag("consent", "update", {
    analytics_storage: analytics ? "granted" : "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
}

function persistConsent(analytics: boolean) {
  const nextConsent: StoredConsent = {
    analytics,
    updatedAt: new Date().toISOString(),
    version: 1,
  };

  window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(nextConsent));
  applyConsentToGoogle(analytics);
}

export default function ConsentBanner() {
  const [isReady, setIsReady] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);

  useEffect(() => {
    const storedConsent = readStoredConsent();

    if (storedConsent) {
      setAnalyticsEnabled(storedConsent.analytics);
      applyConsentToGoogle(storedConsent.analytics);
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }

    setIsReady(true);

    const openPreferences = () => {
      const latestConsent = readStoredConsent();

      if (latestConsent) {
        setAnalyticsEnabled(latestConsent.analytics);
      }

      setShowPreferences(true);
      setIsVisible(true);
    };

    const handlePrivacyChoicesClick = (event: MouseEvent) => {
      const targetElement = event.target;

      if (!(targetElement instanceof Element)) {
        return;
      }

      const triggerElement = targetElement.closest(
        PRIVACY_CHOICES_TRIGGER_SELECTOR,
      );

      if (!triggerElement) {
        return;
      }

      event.preventDefault();
      openPreferences();
    };

    document.addEventListener("click", handlePrivacyChoicesClick);

    return () => {
      document.removeEventListener("click", handlePrivacyChoicesClick);
    };
  }, []);

  const acceptAnalytics = () => {
    setAnalyticsEnabled(true);
    persistConsent(true);
    setShowPreferences(false);
    setIsVisible(false);
  };

  const rejectNonEssential = () => {
    setAnalyticsEnabled(false);
    persistConsent(false);
    setShowPreferences(false);
    setIsVisible(false);
  };

  const savePreferences = () => {
    persistConsent(analyticsEnabled);
    setShowPreferences(false);
    setIsVisible(false);
  };

  if (!isReady || !isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-8 z-[80]">
      <div className="mx-auto w-[calc(100%-48px)] max-w-[1232px]">
        <aside className="frame-shadow w-full rounded-[10px] border border-[var(--border-contrast)] bg-[var(--surface-raised)] p-4 md:p-6">
          <div className="flex flex-col gap-4 md:gap-5">
            <div className="flex flex-col gap-2">
              <p className="font-display text-[12px] uppercase tracking-[0.08em] text-[var(--text-muted)]">
                Privacy controls
              </p>
              <h2 className="font-display text-[16px] leading-tight text-[var(--text-strong)] md:text-[18px]">
                We use essential cookies and optional analytics cookies.
              </h2>
              <p className="type-paragraph text-[13px] text-[var(--text-muted)] md:text-[14px]">
                Essential cookies keep the website functional. Analytics helps us
                understand usage so we can improve the product experience.
                <span className="ml-1">
                  Review details in our
                  <Link
                    href="/en/cookie-policy"
                    className="ml-1 underline decoration-[var(--border-contrast)] underline-offset-4 transition-colors hover:text-brand-mint"
                  >
                    Cookie Policy
                  </Link>
                  .
                </span>
              </p>
            </div>

            {showPreferences ? (
              <div className="rounded-[8px] border border-[var(--border-soft)] bg-[var(--surface-muted)] p-4 md:p-5">
                <div className="flex flex-col gap-4">
                  <div className="flex items-start justify-between gap-4 rounded-[6px] border border-[var(--border-soft)] bg-[var(--surface-raised)] p-3">
                    <div className="flex flex-col gap-1">
                      <p className="font-display text-[12px] uppercase tracking-[0.08em] text-[var(--text-strong)]">
                        Essential
                      </p>
                      <p className="text-[13px] text-[var(--text-muted)]">
                        Required for core website functionality.
                      </p>
                    </div>
                    <span className="self-center inline-flex h-7 items-center whitespace-nowrap rounded-full border border-[var(--border-contrast)] px-3 text-[11px] uppercase tracking-[0.08em] text-[var(--text-muted)]">
                      Always on
                    </span>
                  </div>

                  <div className="flex items-start justify-between gap-4 rounded-[6px] border border-[var(--border-soft)] bg-[var(--surface-raised)] p-3">
                    <div className="flex flex-col gap-1">
                      <p className="font-display text-[12px] uppercase tracking-[0.08em] text-[var(--text-strong)]">
                        Analytics
                      </p>
                      <p className="text-[13px] text-[var(--text-muted)]">
                        Enables measurement in Google Analytics via GTM.
                      </p>
                    </div>

                    <button
                      type="button"
                      role="switch"
                      aria-checked={analyticsEnabled}
                      aria-label="Enable analytics cookies"
                      onClick={() =>
                        setAnalyticsEnabled((previous) => !previous)
                      }
                      className={`self-center relative inline-flex h-7 w-12 flex-shrink-0 cursor-pointer items-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-mint focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface-muted)] ${analyticsEnabled ? "bg-brand-mint" : "bg-[var(--border-contrast)]"}`}
                    >
                      <span
                        className={`h-5 w-5 rounded-full bg-white transition-transform ${analyticsEnabled ? "translate-x-6" : "translate-x-1"}`}
                      />
                    </button>
                  </div>
                </div>
              </div>
            ) : null}

            <div className="flex flex-col gap-2 pt-2 sm:flex-row sm:items-center sm:justify-between sm:pt-0">
              <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap">
                <PrimaryButton
                  onClick={acceptAnalytics}
                  className="h-[38px] w-full cursor-pointer sm:w-auto"
                 
                >
                  Accept analytics
                </PrimaryButton>
                <SecondaryButton
                  onClick={rejectNonEssential}
                  className="w-full cursor-pointer sm:w-auto"
                 
                >
                  Reject non-essential
                </SecondaryButton>
              </div>

              {!showPreferences ? (
                <button
                  type="button"
                  onClick={() => setShowPreferences(true)}
                  className="cursor-pointer self-end font-display text-[13px] leading-none text-[var(--text-muted)] underline decoration-[var(--border-contrast)] underline-offset-4 transition-colors hover:text-brand-mint focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-mint focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface-raised)]"
                 
                >
                  Customize
                </button>
              ) : (
                <button
                  type="button"
                  onClick={savePreferences}
                  className="mt-2 cursor-pointer self-center sm:self-end !font-display !text-[14px] leading-none text-[var(--text-muted)] underline decoration-[var(--border-contrast)] underline-offset-4 transition-colors hover:text-brand-mint focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-mint focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface-raised)]"
                >
                  Save choices
                </button>
              )}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}







