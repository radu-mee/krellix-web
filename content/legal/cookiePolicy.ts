import type { LegalPage } from "@/types/legal";

export const cookiePolicyPage: LegalPage = {
  label: "Legal stuff",
  title: "Cookie policy",
  updatedAt: "April 6, 2026",
  sections: [
    {
      title: "Overview",
      paragraphs: [
        "This Cookie Policy explains how Krellixlabs (\"Krellixlabs,\" \"we,\" \"us,\" or \"our\") uses cookies and similar technologies when you use Krellix and related websites, applications, and services (the \"Services\").",
        "By continuing to use the Services, you agree to our use of cookies as described in this Policy, subject to your choices where consent is required by law.",
      ],
    },
    {
      title: "What Are Cookies?",
      paragraphs: [
        "Cookies are small text files placed on your device by websites or apps. They help services work properly, remember preferences, improve performance, and support analytics and security.",
        "We may also use similar technologies, including local storage, SDK identifiers, pixels, and log-based tracking.",
      ],
    },
    {
      title: "Types of Cookies We Use",
      paragraphs: [
        "Strictly Necessary Cookies: These are required for core functionality such as authentication, security, load balancing, fraud prevention, and saving privacy preferences.",
        "Performance and Analytics Cookies: These help us understand how users interact with Krellix (for example, page usage, feature usage, errors, and performance) so we can improve stability and usability.",
        "Functionality Cookies: These remember choices such as language, interface settings, and other non-essential preferences.",
        "Communication and Campaign Measurement Technologies: Where applicable, we may use tracking technologies in emails or product links to understand delivery, engagement, and service communications performance.",
      ],
    },
    {
      title: "Third-Party Providers",
      paragraphs: [
        "Krellixlabs uses third-party providers that may set cookies or similar identifiers depending on the feature used, including Stripe, Supabase, Cloudflare, X AI, OpenAI, Gemini, Loops, and Ketch.",
        "Not every provider sets cookies in every session, and technologies used may vary based on whether you are browsing the website, signed in, making a payment, or using specific product features.",
      ],
    },
    {
      title: "How Long Cookies Last",
      paragraphs: [
        "Cookies can be session cookies (deleted when you close your browser or app session) or persistent cookies (remain for a set period or until you delete them).",
        "Duration depends on each cookie's purpose, for example security and consent records may persist longer than session navigation cookies.",
      ],
    },
    {
      title: "Your Choices and Controls",
      paragraphs: [
        "You can control cookie usage in several ways.",
        "Consent Banner and Privacy Choices: You can accept, reject, or modify non-essential cookie preferences through our consent management tools (powered by Ketch), where legally required.",
        "Browser Settings: Most browsers let you block or delete cookies. Blocking some cookies may affect site functionality.",
        "Device and App Controls: Mobile operating systems and app settings may offer controls for tracking and diagnostics.",
        "Email Preferences: You can unsubscribe from marketing emails using the unsubscribe link included in those messages.",
      ],
    },
    {
      title: "Do Not Track",
      paragraphs: [
        "Some browsers send \"Do Not Track\" signals. Because there is no universally accepted standard, our Services may not respond to all such signals in a consistent way. You can still manage cookies using the controls above.",
      ],
    },
    {
      title: "International Data Processing",
      paragraphs: [
        "Information collected through cookies and similar technologies may be processed in countries outside your own. Where required, Krellixlabs applies appropriate safeguards for international data transfers.",
      ],
    },
    {
      title: "Changes to This Cookie Policy",
      paragraphs: [
        "We may update this Cookie Policy from time to time. If we make material changes, we will post the updated version and revise the \"Last Updated\" date.",
      ],
    },
    {
      title: "Contact Us",
      paragraphs: [
        "If you have questions about this Cookie Policy or your privacy choices, contact:",
        "Krellixlabs",
        "Email: support@krellixlabs.com",
        "Address: 100 Greengate, Manchester, UK",
      ],
    },
  ],
};
