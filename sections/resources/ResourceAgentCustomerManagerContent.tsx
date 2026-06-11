import Link from "next/link";
import { localizePath } from "@/lib/i18n";
import DotGridDivider from "@/ui/DotGridDivider";
import ThemeImage from "@/ui/ThemeImage";
import ResourceMarkdownNotice from "@/sections/resources/ResourceMarkdownNotice";
import ResourceKrellixCta from "@/sections/resources/ResourceKrellixCta";

const FAQ_ITEMS = [
  {
    question: "What does a customer success manager help with?",
    answer:
      "A customer success manager helps guide onboarding, adoption, renewals, escalation handling, customer communication, and long-term relationship management throughout the customer lifecycle.",
  },
  {
    question: "What is customer onboarding?",
    answer:
      "Customer onboarding is the process of helping new customers successfully adopt a product, understand its value, and achieve their goals quickly. This agent helps structure onboarding communication, onboarding checklists, success planning, and customer follow-up workflows more consistently.",
  },
  {
    question: "Can this AI agent support renewal management?",
    answer:
      "Yes. The agent is designed to help prepare renewal conversations, identify churn risks, support expansion discussions, and improve proactive customer communication before accounts become at risk.",
  },
  {
    question: "How can AI help reduce customer churn?",
    answer:
      "AI for customer success can help identify churn signals earlier, improve customer communication consistency, support proactive account management, and structure customer retention workflows more effectively.",
  },
] as const;

export default function ResourceAgentCustomerManagerContent() {
  return (
    <section className="flex flex-col">
      <div className="border-b border-[var(--border-soft)] px-4 py-14 md:px-6 md:py-16">
        <div className="max-w-[900px]">
          <Link
            href={localizePath("/resources/agents")}
            className="type-label inline-flex text-brand-mint transition-opacity hover:opacity-80"
            style={{ color: "#00ddb5" }}
          >
            BACK TO AGENTS
          </Link>
          <h1 className="type-h1 mt-3 text-[var(--text-strong)]">Customer manager</h1>
          <p className="type-paragraph mt-4 text-[var(--text-muted)]">
            A retention-focused CRM specialist that turns customers into advocates.
          </p>
        </div>
      </div>

      <div className="border-b border-[var(--border-soft)] bg-[var(--resource-agent-detail-bg)] px-4 py-10 md:px-6 md:py-12">
        <div className="max-w-[980px]">
          <p className="type-paragraph text-[var(--text-muted)]">
            Draft renewal conversations, identify churn signals, improve customer onboarding, and prepare difficult
            customer conversations with an agent focused on retention, customer outcomes, and long-term account
            growth.
          </p>
          <h2 className="mt-8 font-display text-[20px] leading-none text-[var(--text-strong)]">
            How this agent works
          </h2>
          <p className="type-paragraph mt-4 text-[var(--text-muted)]">
            Customer success workflows often involve onboarding, renewals, escalations, and long-term customer
            relationship management across every stage of the customer lifecycle.
          </p>
          <p className="type-paragraph mt-2 text-[var(--text-muted)]">
            As communication volume grows, maintaining consistency across customer interactions becomes increasingly
            difficult.
          </p>
          <p className="type-paragraph mt-2 text-[var(--text-muted)]">
            This agent is designed to support proactive customer success workflows instead of reactive support. Use AI
            for customer success to structure renewal management conversations, onboarding coordination, escalation
            responses, churn reduction strategies, and customer retention processes more consistently as customer
            relationships scale.
          </p>

          <a
            href="https://cdlhsmdugnbzoirpwpxh.supabase.co/storage/v1/object/public/website-assets/resources-agents/Customer-manager-krellixlabs.zip"
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

      <ResourceKrellixCta />

      

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
