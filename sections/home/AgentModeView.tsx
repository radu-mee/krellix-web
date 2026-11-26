import { DEFAULT_LOCALE, isSupportedLocale, localizePath } from "@/lib/i18n";
import { siteConfig } from "@/lib/site";
import PageFrame from "@/layout/PageFrame";

const PAGE_DESCRIPTION = "AI copilots collaborating in a multi-agent system to improve decisions, workflows, and productivity. Start your AI workspace today.";

function toAbsolute(path: string) {
  return new URL(path, siteConfig.siteUrl).toString();
}

function buildAgentModePayload(locale: string) {
  const resolvedLocale = isSupportedLocale(locale) ? locale : DEFAULT_LOCALE;
  const localized = (path: string) => toAbsolute(localizePath(path, resolvedLocale));

  return {
    product: {
      name: "Krellix",
      category: "Collaborative AI Workspace",
      description: PAGE_DESCRIPTION,
      locale: resolvedLocale,
      mode: "agent",
    },
    capabilities: [
      "multi-agent collaboration",
      "shared project context",
      "cross-functional workflow support",
      "role-based solution guidance",
    ],
    authentication: {
      website: "none",
      api: "not yet public",
      openapi: "not yet public",
    },
    endpoints: {
      home: localized("/"),
      product: localized("/product"),
      solutions: localized("/solutions"),
      resources: localized("/resources"),
      pricing: localized("/pricing"),
      blog: localized("/blog"),
      contact: localized("/contact"),
      llms: toAbsolute("/llms.txt"),
      llms_full: toAbsolute("/llms-full.txt"),
      pricing_markdown: toAbsolute("/pricing.md"),
      home_markdown: toAbsolute("/index.md"),
      agent_discovery: toAbsolute("/.well-known/agent.json"),
      ai_plugin: toAbsolute("/.well-known/ai-plugin.json"),
      a2a_agent_card: toAbsolute("/.well-known/agent-card.json"),
      mcp_discovery: toAbsolute("/.well-known/mcp"),
      mcp_server_card: toAbsolute("/.well-known/mcp/server-card.json"),
      openapi: {
        url: toAbsolute("/api/openapi.json"),
        status: "planned",
      },
      developers_docs: {
        url: localized("/developers"),
        status: "planned",
      },
    },
    pricing: {
      currency: "USD",
      billing_period: "monthly",
      plans: [
        { name: "Free", price: 0.0 },
        { name: "Plus", price: 19.9 },
        { name: "Pro", price: 29.9 },
      ],
    },
    integrations: {
      status: "planned for v2",
      note:
        "Native third-party connectors are planned for a future release. Current public positioning focuses on multi-agent collaboration and shared project context.",
    },
    limitations: [
      "Public API docs are not yet published.",
      "Public OpenAPI spec is not yet published.",
      "Public MCP tooling surface may evolve while integrations are expanded.",
    ],
    contact: {
      general: "office@krellixlabs.com",
      press: "press@krellixlabs.com",
      support: "support@krellixlabs.com",
    },
  };
}

export default function AgentModeView({ locale }: { locale: string }) {
  const payload = buildAgentModePayload(locale);
  const payloadJson = JSON.stringify(payload, null, 2).replace(/</g, "\\u003c");

  return (
    <PageFrame>
      <main className="flex flex-1 flex-col px-4 py-14 md:px-6 md:py-16">
        <section className="mx-auto w-full max-w-[980px]">
          <h1 className="type-h2 text-[var(--text-strong)]">Krellix Agent Mode</h1>
          <p className="type-paragraph mt-4 text-[var(--text-strong)]">
            Structured machine-readable product context for AI agents.
          </p>
          <h2 className="mt-8 font-display text-[18px] leading-none text-[var(--text-strong)]">
            JSON Payload
          </h2>
          <pre className="mt-4 overflow-x-auto rounded-md border border-[var(--border-soft)] bg-[var(--surface-raised)] p-4 text-xs leading-6 text-[var(--text-strong)]">
            {payloadJson}
          </pre>
          <script
            id="krellix-agent-mode-data"
            type="application/json"
            dangerouslySetInnerHTML={{ __html: payloadJson }}
          />
        </section>
      </main>
    </PageFrame>
  );
}

