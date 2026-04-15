import AsciiEffectDemo from "@/ui/AsciiEffectDemo";
import PrimaryLinkButton from "@/ui/PrimaryLinkButton";

export default function RegistrationSuccessHero() {
  return (
    <section className="mx-auto flex w-full max-w-[760px] flex-col items-center px-4 pb-[128px] pt-0 text-center md:px-6">
      <div className="flex w-full flex-col items-center">
        <div className="pt-[128px]">
          <AsciiEffectDemo effect="waveField" size={220} className="mb-16" />
        </div>

        <h1 className="type-h1 text-[var(--text-strong)]">All done</h1>
        <p className="type-paragraph mt-4 max-w-[620px] text-[var(--text-muted)]">
          Your registration was successful. We&apos;ll be in touch.
        </p>

        <PrimaryLinkButton
          href="/en"
          label="Go to homepage"
          className="mt-8 !bg-white !text-black border border-[var(--border-strong)]"
        />
      </div>
    </section>
  );
}



