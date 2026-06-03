import Link from "next/link";
import { localizePath } from "@/lib/i18n";
import DotGridDivider from "@/ui/DotGridDivider";
import ThemeImage from "@/ui/ThemeImage";
import ResourceMarkdownNotice from "@/sections/resources/ResourceMarkdownNotice";

const FAQ_ITEMS = [
  {
    question: "What is a sprint retrospective?",
    answer:
      "A sprint retrospective is a structured meeting held at the end of a sprint where a team reflects on what worked, what didn't, and what changes could improve future sprints.",
  },
  {
    question: "What is the purpose of a sprint retrospective?",
    answer:
      "The purpose of a sprint retrospective is to identify opportunities for improvement, strengthen team collaboration, address recurring challenges, and agree on actions that can improve future performance.",
  },
  {
    question: "What should a sprint retrospective include?",
    answer:
      "Most sprint retrospective templates include discussions around successes, challenges, root causes, lessons learned, action items, team feedback, and follow-up on improvements from previous retrospectives.",
  },
  {
    question: "Can this template support Agile teams?",
    answer:
      "Yes. This framework can support Agile teams by providing a structured process for continuous improvement, team reflection, action planning, and retrospective reviews across recurring sprints.",
  },
] as const;

export default function ResourceTemplateSprintRetrospectiveContent() {
  return (
    <section className="flex flex-col">
      <div className="border-b border-[var(--border-soft)] px-4 py-14 md:px-6 md:py-16">
        <div className="max-w-[900px]">
          <Link
            href={localizePath("/resources/templates")}
            className="type-label inline-flex text-brand-mint transition-opacity hover:opacity-80"
            style={{ color: "#00ddb5" }}
          >
            BACK TO TEMPLATES
          </Link>
          <h1 className="type-h1 mt-3 text-[var(--text-strong)]">Sprint Retrospective Template</h1>
          <p className="type-paragraph mt-4 text-[var(--text-muted)]">
            Turn team feedback into meaningful improvements with a Sprint Retrospective Template designed to help
            identify root causes, strengthen collaboration, and turn lessons learned into lasting process changes.
          </p>
        </div>
      </div>

      <div className="border-b border-[var(--border-soft)] bg-[var(--resource-agent-detail-bg)] px-4 py-10 md:px-6 md:py-12">
        <div className="max-w-[980px]">
          <h2 className="font-display text-[20px] leading-none text-[var(--text-strong)]">About this template</h2>
          <p className="type-paragraph mt-4 text-[var(--text-muted)]">
            The value of a sprint retrospective is not in discussing what happened-it's in deciding what to do
            differently next. Without clear ownership, follow-up, and honest reflection, the same issues tend to
            appear repeatedly from one iteration to the next. A strong retrospective creates space for teams to learn
            from their work, surface recurring challenges, and continuously improve how they plan, collaborate, and
            deliver.
          </p>
          <p className="type-paragraph mt-4 text-[var(--text-muted)]">
            Use this retrospective template to review sprint outcomes, explore what worked and what didn't, identify
            improvement opportunities, track action items, and evaluate team health over time. The framework can
            support Agile teams looking to build stronger feedback loops, increase accountability, and create
            sustainable improvements across future iterations.
          </p>

          <a
            href="https://cdlhsmdugnbzoirpwpxh.supabase.co/storage/v1/object/public/website-assets/resources-templates/Sprint-retrospective-template-krellixlabs.zip"
            className="mt-8 inline-flex h-[38px] items-center justify-center rounded-[6px] border border-[var(--border-soft)] bg-[var(--resource-agent-download-button-bg)] px-3 transition-colors hover:text-brand-mint"
          >
            <ThemeImage
              lightSrc="/brand/download-icon-CTA-black.svg"
              darkSrc="/brand/download-icon-CTA-white.svg"
              alt=""
              width={16}
              height={16}
            />
            <span className="mx-[10px] h-[14px] w-px bg-[var(--resource-row-button-divider)]" aria-hidden="true" />
            <span className="font-display text-[12px] leading-none text-[var(--text-strong)]">Download</span>
            <span className="mx-[10px] h-[14px] w-px bg-[var(--resource-row-button-divider)]" aria-hidden="true" />
            <ThemeImage
              lightSrc="/brand/markdown-icon-26x16-light-mode.svg"
              darkSrc="/brand/markdown-icon-26x16-dark-mode.svg"
              alt=""
              width={26}
              height={16}
            />
          </a>
        </div>
      </div>

      <ResourceMarkdownNotice />

      <div className="my-16">
        <DotGridDivider />
      </div>

      <div className="border-b border-[var(--border-soft)] px-4 py-10 md:px-6 md:py-12">
        <div className="grid gap-8 md:grid-cols-[minmax(260px,0.8fr)_minmax(420px,1.2fr)] md:items-center md:gap-10">
          <div className="max-w-[460px]">
            <p className="type-label text-brand-mint">TRY KRELLIX FOR FREE</p>
            <h2 className="mt-3 font-display text-[20px] leading-none text-[var(--text-strong)] md:text-[24px]">
              Get more done with your team of AI copilots
            </h2>
            <p className="type-paragraph mt-4 text-[var(--text-muted)]">
              Solo or with a team, Krellix gives you the collaborators you need to move faster and ship better work.
            </p>
            <Link
              href={localizePath("/product")}
              style={{
                backgroundColor: "var(--button-primary-bg)",
                color: "var(--button-primary-text)",
              }}
              className="mt-8 inline-flex h-[38px] items-center justify-center rounded-[6px] px-4 font-display text-[12px] leading-none transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-mint focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface-bg)]"
            >
              Learn more
            </Link>
          </div>

          <div className="hidden justify-center md:flex">
            <ThemeImage
              lightSrc="/images/resources-chat-image-light-mode-eng.svg"
              darkSrc="/images/resources-chat-image-dark-mode-eng.svg"
              alt="Krellix AI copilots working together in a shared workspace to help individuals and teams manage tasks, communicate, and ship better work."
              width={738}
              height={637}
            />
          </div>
        </div>

        <div className="mt-8 flex justify-center md:hidden">
          <ThemeImage
            lightSrc="/images/resources-chat-mobile-image-light-mode-eng.svg"
            darkSrc="/images/resources-chat-mobile-image-dark-mode-eng.svg"
            alt="Krellix AI copilots working together in a shared workspace to help individuals and teams manage tasks, communicate, and ship better work."
            width={375}
            height={639}
          />
        </div>
      </div>

      <div className="my-16">
        <DotGridDivider />
      </div>

      <div className="px-4 pb-16 md:px-6 md:pb-20">
        <div className="flex flex-col">
          {FAQ_ITEMS.map((item) => (
            <article
              key={item.question}
              className="grid gap-4 py-8 md:grid-cols-[minmax(280px,1fr)_minmax(320px,1.2fr)] md:gap-10"
            >
              <h3 className="font-display text-[20px] leading-none text-[var(--text-strong)]">
                {item.question}
              </h3>
              <p className="type-paragraph text-[var(--text-muted)]">{item.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
