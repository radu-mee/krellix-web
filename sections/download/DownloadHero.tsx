import { siteConfig } from "@/lib/site";
import DotGridDivider from "@/ui/DotGridDivider";
import IconCtaButton from "@/ui/IconCtaButton";
import ThemeImage from "@/ui/ThemeImage";

function DownloadPlatformCard({
  iconLightSrc,
  iconDarkSrc,
  buttonLabel,
  withDivider = false,
}: {
  iconLightSrc: string;
  iconDarkSrc: string;
  buttonLabel: string;
  withDivider?: boolean;
}) {
  return (
    <article
      className={`flex flex-col border-b border-[var(--border-soft)] ${withDivider ? "md:border-l" : ""}`.trim()}
    >
      <div className="flex min-h-[220px] flex-1 items-center justify-center bg-[var(--surface-bg)] px-6 py-16 md:min-h-[260px]">
        <div className="relative h-16 w-16">
          <ThemeImage
            lightSrc={iconLightSrc}
            darkSrc={iconDarkSrc}
            alt="Platform icon"
            width={64}
            height={64}
          />
        </div>
      </div>

      <div className="flex justify-center border-t border-[var(--border-soft)] bg-[var(--surface-raised)] px-6 py-6">
        <IconCtaButton href={siteConfig.downloadHref} label={buttonLabel} />
      </div>
    </article>
  );
}

export default function DownloadHero() {
  return (
    <section className="flex flex-col">
      <div className="border-b border-[var(--border-soft)] px-4 py-14 md:px-6 md:py-16">
        <div className="max-w-[620px]">
          <p className="type-label text-brand-mint">Download</p>
          <h1 className="type-h1 mt-3 text-[var(--text-strong)]">Get Krellix</h1>
          <p className="type-paragraph mt-4 text-[var(--text-muted)]">
            Access all the feature on your Mac or PC or both.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2">
        <DownloadPlatformCard
          iconLightSrc="/brand/mac-download-icon-white.svg"
          iconDarkSrc="/brand/mac-download-icon-black.svg"
          buttonLabel="Download for macOS"
        />
        <DownloadPlatformCard
          iconLightSrc="/brand/windows-download-icon-white.svg"
          iconDarkSrc="/brand/windows-download-icon-black.svg"
          buttonLabel="Download for Windows"
          withDivider
        />
      </div>

      <div className="my-16">
        <DotGridDivider />
      </div>
    </section>
  );
}