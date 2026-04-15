import PageFrame from "@/layout/PageFrame";
import Ascii404Burst from "@/ui/Ascii404Burst";
import PrimaryLinkButton from "@/ui/PrimaryLinkButton";

export default function NotFound() {
  return (
    <PageFrame>
      <main className="flex min-h-screen flex-1 items-center justify-center px-4 py-16 text-center md:px-6">
        <section className="mx-auto flex w-full max-w-[760px] flex-col items-center">
          <Ascii404Burst size={248} className="mb-16" />

          <h1 className="type-h1 text-[var(--text-strong)]">Oups!</h1>
          <p className="type-paragraph mt-4 max-w-[560px] text-[var(--text-muted)]">
            It looks like something&apos;s gone wrong! The page you are looking for
            appears to have been moved, deleted or doesn&apos;t exist.
          </p>

          <PrimaryLinkButton href="/en" label="Go to homepage" className="mt-8 !bg-white !text-black border border-[var(--border-strong)]" />
        </section>
      </main>
    </PageFrame>
  );
}


