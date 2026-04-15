import DotGridDivider from "@/ui/DotGridDivider";
import IconCtaButton from "@/ui/IconCtaButton";
import ThemeImage from "@/ui/ThemeImage";

const PNG_ARCHIVE_URL =
  "https://cdlhsmdugnbzoirpwpxh.supabase.co/storage/v1/object/public/website-assets/Krellix-logo-PNG.zip";
const SVG_ARCHIVE_URL =
  "https://cdlhsmdugnbzoirpwpxh.supabase.co/storage/v1/object/public/website-assets/Krellix-logo-SVG.zip";

function PressKitAssetCard({
  buttonLabel,
  href,
  withDivider = false,
}: {
  buttonLabel: string;
  href: string;
  withDivider?: boolean;
}) {
  return (
    <article
      className={`flex flex-col border-b border-[var(--border-soft)] ${withDivider ? "md:border-l" : ""}`.trim()}
    >
      <div className="flex min-h-[220px] flex-1 items-center justify-center bg-[var(--surface-bg)] px-6 py-16 md:min-h-[260px]">
        <ThemeImage
          lightSrc="/brand/krellix-logo-press-kit-black.svg"
          darkSrc="/brand/krellix-logo-press-kit-white.svg"
          alt="Krellix logo"
          width={72}
          height={20}
        />
      </div>

      <div className="flex justify-center border-t border-[var(--border-soft)] bg-[var(--surface-raised)] px-6 py-6">
        <IconCtaButton href={href} label={buttonLabel} />
      </div>
    </article>
  );
}

export default function PressKitHero() {
  return (
    <section className="flex flex-col">
      <div className="border-b border-[var(--border-soft)] px-4 py-14 md:px-6 md:py-16">
        <div className="max-w-[620px]">
          <p className="type-label text-brand-mint">Press kit</p>
          <h1 className="type-h1 mt-3 text-[var(--text-strong)]">
            Krellix brand assets
          </h1>
          <p className="type-paragraph mt-4 text-[var(--text-muted)]">
            Access the official logos and brand guidelines.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2">
        <PressKitAssetCard buttonLabel="Download as PNG" href={PNG_ARCHIVE_URL} />
        <PressKitAssetCard
          buttonLabel="Download as SVG"
          href={SVG_ARCHIVE_URL}
          withDivider
        />
      </div>

      <div className="my-16">
        <DotGridDivider />
      </div>
    </section>
  );
}