import DotGridDivider from "@/ui/DotGridDivider";

type SubprocessorItem = {
  name: string;
  purpose: string;
  url: string;
};

const SUBPROCESSORS: readonly SubprocessorItem[] = [
  {
    name: "Stripe",
    purpose: "Payment processing and billing",
    url: "https://stripe.com",
  },
  {
    name: "Supabase",
    purpose: "Backend infrastructure",
    url: "https://supabase.com",
  },
  {
    name: "CloudFlare",
    purpose: "CDN and security services",
    url: "https://cloudflare.com",
  },
  {
    name: "X AI",
    purpose: "AI language model services",
    url: "https://x.ai",
  },
  {
    name: "OpenAI",
    purpose: "AI language model services",
    url: "https://openai.com",
  },
  {
    name: "Gemini",
    purpose: "AI language model services",
    url: "https://gemini.google.com",
  },
  {
    name: "Loops",
    purpose: "Transactional and marketing emails.",
    url: "https://loops.so",
  },
];

export default function SubprocessorsContent() {
  return (
    <section className="flex flex-col">
      <div className="px-4 py-14 md:px-6 md:py-16">
        <div className="max-w-[720px]">
          <p className="type-label text-brand-mint">Legal stuff</p>
          <h1 className="type-h1 mt-3 text-[var(--text-strong)]">Subprocessors</h1>
          <p className="type-paragraph mt-4 text-[var(--text-muted)]">
            Know exactly where your data is and how it&apos;s being used.
          </p>
        </div>
      </div>

      <DotGridDivider />

      <div className="px-4 py-14 md:px-6 md:py-16">
        <div className="flex flex-col gap-14 md:hidden">
          {SUBPROCESSORS.map((item) => (
            <section key={item.name} className="grid gap-y-3 text-left">
              <h2 className="type-h3 text-[var(--text-strong)]">{item.name}</h2>
              <p className="type-paragraph text-[var(--text-muted)]">{item.purpose}</p>
              <a
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="type-paragraph text-[#00C29F]"
                style={{ color: "#00C29F" }}
              >
                {item.url}
              </a>
            </section>
          ))}
        </div>

        <div className="hidden md:grid md:grid-cols-[minmax(180px,280px)_minmax(260px,1fr)_minmax(220px,280px)] md:items-start md:gap-x-10 md:gap-y-12">
          {SUBPROCESSORS.map((item) => (
            <div key={item.name} className="contents">
              <h2 className="type-h3 text-left text-[var(--text-strong)]">
                {item.name}
              </h2>
              <p className="type-paragraph text-left text-[var(--text-muted)]">
                {item.purpose}
              </p>
              <a
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="type-paragraph text-left text-[#00C29F]"
                style={{ color: "#00C29F" }}
              >
                {item.url}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
