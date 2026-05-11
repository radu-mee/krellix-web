import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBlogPostBySlug, getBlogPosts } from "@/content/blog/posts";
import { getBlogSeoBySlug } from "@/content/blog/seo";
import { DEFAULT_LOCALE, SUPPORTED_LOCALES } from "@/lib/i18n";
import {
  ORGANIZATION_ID,
  buildLocalizedAbsoluteUrl,
  buildSiteSchemaNodes,
  buildWebPageSchema,
} from "@/lib/schema";
import { buildLocaleAlternates } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import PageFrame from "@/layout/PageFrame";
import SiteFooter from "@/layout/SiteFooter";
import SiteHeader from "@/layout/SiteHeader";
import BlogArticleContent from "@/sections/blog/BlogArticleContent";
import JsonLd from "@/ui/JsonLd";

type BlogArticlePageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

const AI_WONT_ALWAYS_MAKE_YOU_FASTER_FAQ_ITEMS = [
  {
    question: "What is AI productivity?",
    answer:
      "AI productivity refers to how AI tools affect the speed and quality of work, depending on how effectively their outputs are evaluated and used.",
  },
  {
    question: "What does working with AI involve?",
    answer:
      "Working with AI involves generating, evaluating, and refining outputs - not just producing them.",
  },
  {
    question: "What is AI decision making?",
    answer:
      "AI decision making is the process of evaluating AI-generated outputs and choosing the best direction based on context and experience.",
  },
  {
    question: "How does AI affect problem solving?",
    answer:
      "AI supports problem solving by generating ideas and structuring thinking, but still requires human judgment to evaluate outcomes.",
  },
] as const;

const WHAT_ARE_AI_ETHICS_FAQ_ITEMS = [
  {
    question: "What is AI ethics?",
    answer:
      "AI ethics is the study and practice of making sure AI systems are developed and used in ways that are fair, transparent, accountable, safe, and beneficial to people.",
  },
  {
    question: "What is ethical AI?",
    answer:
      "Ethical AI refers to AI systems designed and deployed with safeguards that reduce harm, support fairness, protect privacy, and keep people accountable for important decisions.",
  },
  {
    question: "What are the biggest AI ethics challenges?",
    answer:
      "The biggest AI ethics challenges include bias, lack of transparency, unclear accountability, privacy risks, unsafe deployment, and the difficulty of deciding whose values should shape AI systems.",
  },
  {
    question: "What are responsible AI principles?",
    answer:
      "Responsible AI principles usually include fairness, transparency, accountability, privacy, safety, human oversight, and clear documentation of how AI systems are built and used.",
  },
  {
    question: "Is AI unethical?",
    answer:
      "AI is not automatically unethical. It becomes ethically risky when it is trained on biased data, used without oversight, deployed in high-stakes contexts without safeguards, or allowed to affect people without transparency or accountability.",
  },
  {
    question: "Why is AI transparency important?",
    answer:
      "AI transparency matters because people should know when AI is being used, how decisions are made at a general level, and what limits or risks the system may have.",
  },
] as const;

const WHY_AI_PROJECTS_FAIL_FAQ_ITEMS = [
  {
    question: "Why do AI projects fail?",
    answer:
      "Most AI projects fail due to organizational issues, not technology. Common causes include unclear goals, poor data quality, lack of ownership, and weak leadership support.",
  },
  {
    question: "What are the biggest AI adoption challenges?",
    answer:
      "The biggest challenges are data readiness, unclear strategy, lack of internal skills, and difficulty integrating AI into existing workflows.",
  },
  {
    question: "How important is data for AI success?",
    answer:
      "Data is critical. Many AI projects fail because data is incomplete, inconsistent, or not properly structured before implementation begins.",
  },
  {
    question: "Why do AI proof of concepts fail to scale?",
    answer:
      "Most AI proof of concepts fail because they are not connected to real workflows or business outcomes. They demonstrate potential but don't translate into practical use.",
  },
  {
    question: "How can companies implement AI successfully?",
    answer:
      "Successful AI implementation requires clear goals, strong data foundations, executive support, and redesigning workflows around the technology.",
  },
  {
    question: "What do successful AI projects do differently?",
    answer:
      "Successful projects define success metrics early, invest in data readiness, maintain leadership support, and treat AI as a business transformation rather than just a technical tool.",
  },
] as const;

const WHAT_ARE_AI_AGENTS_FAQ_ITEMS = [
  {
    question: "What are AI agents?",
    answer:
      "AI agents are systems that can pursue a goal by making decisions and taking actions across multiple steps, rather than simply responding to prompts.",
  },
  {
    question: "How do AI agents work?",
    answer:
      "They operate in a loop: perceive information, reason about what to do, take action, evaluate the result, and repeat until the goal is achieved.",
  },
  {
    question: "AI agents vs chatbots - what's the difference?",
    answer:
      "Chatbots respond to inputs, while AI agents take action and complete tasks. A chatbot answers questions; an agent works toward a goal.",
  },
  {
    question: "Are AI agents the same as AI assistants?",
    answer:
      "No. AI assistants respond to requests, while AI agents can act more autonomously and handle multi-step workflows.",
  },
  {
    question: "What are AI agents used for?",
    answer:
      "They are used for research, workflow automation, data analysis, and tasks that require multiple steps and decision-making.",
  },
  {
    question: "What are the limitations of AI agents?",
    answer:
      "They struggle with unclear goals, complex judgment, and situations where human context or oversight is required.",
  },
] as const;

const ONE_AI_IS_NOT_A_TEAM_FAQ_ITEMS = [
  {
    question: "What is collaborative artificial intelligence?",
    answer:
      "Collaborative artificial intelligence is when multiple AI systems work together, each with a specific role instead of one system doing everything.",
  },
  {
    question: "Why is one AI assistant not enough?",
    answer:
      "A single AI lacks multiple perspectives, which limits critical thinking, challenge, and refinement in complex tasks.",
  },
  {
    question: "What is multi agent AI?",
    answer:
      "Multi agent AI is a system where multiple AI agents collaborate, each specialising in a specific task or domain.",
  },
  {
    question: "Can AI systems talk to each other?",
    answer:
      "Yes, modern systems enable AI talking to AI, where agents exchange information and build on each other's outputs.",
  },
  {
    question: "What is the benefit of AI speaking to each other?",
    answer:
      "It creates better outcomes through feedback, challenge, and iteration, similar to how human teams work.",
  },
  {
    question: "Is collaborative AI replacing humans?",
    answer:
      "No, it supports humans by improving execution, while decisions and judgment remain human-led.",
  },
] as const;

const WHAT_IS_AN_AI_HALLUCINATION_FAQ_ITEMS = [
  {
    question: "What is an AI hallucination?",
    answer:
      "An AI hallucination is when a model generates confident but incorrect or fabricated information.",
  },
  {
    question: "Why do AI hallucinations happen?",
    answer:
      "They happen because AI predicts language patterns rather than verifying facts.",
  },
  {
    question: "What are AI hallucination examples?",
    answer: "Examples include fake citations, incorrect data, or invented events.",
  },
  {
    question: "Can ChatGPT hallucinate?",
    answer:
      "Yes, ChatGPT hallucination occurs when it produces plausible but false outputs.",
  },
  {
    question: "What is an LLM hallucination?",
    answer:
      "An LLM hallucination refers to incorrect outputs generated by large language models.",
  },
  {
    question: "How can you prevent AI hallucinations?",
    answer:
      "By verifying outputs, using precise prompts, and treating AI as a draft tool.",
  },
] as const;

function splitKeywords(csv: string): string[] {
  return csv
    .split(",")
    .map((keyword) => keyword.trim())
    .filter((keyword) => keyword.length > 0);
}

function parseReadMinutes(readTimeLabel: string): number | undefined {
  const match = readTimeLabel.match(/(\d+)\s*min/i);
  if (!match) {
    return undefined;
  }

  const minutes = Number.parseInt(match[1], 10);
  return Number.isFinite(minutes) ? minutes : undefined;
}

function stripMarkdownLinks(text: string): string {
  return text.replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+|\/[^\s)]+)\)/g, "$1");
}

export function generateStaticParams() {
  return SUPPORTED_LOCALES.flatMap((locale) =>
    getBlogPosts().map((post) => ({ locale, slug: post.slug })),
  );
}

export async function generateMetadata({
  params,
}: BlogArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Article",
    };
  }

  const seo = getBlogSeoBySlug(slug);

  const description = seo?.metaDescription ?? post.excerpt;
  const alternates = buildLocaleAlternates(
    `/blog/${post.slug}`,
    seo?.canonicalPath ?? `/blog/${post.slug}`,
  );
  const canonicalPath =
    typeof alternates.canonical === "string"
      ? alternates.canonical
      : `/en/blog/${post.slug}`;
  const resolvedTitle: Metadata["title"] = seo
    ? { absolute: seo.metaTitle }
    : post.title;

  const ogTitle = seo?.ogTitle ?? post.title;
  const ogDescription = seo?.ogDescription ?? description;

  const keywordSet = new Set<string>();
  if (seo?.primaryKeyword) keywordSet.add(seo.primaryKeyword.trim());
  if (seo?.focusKeyphrase) keywordSet.add(seo.focusKeyphrase.trim());
  if (seo?.secondaryKeywordsCsv) {
    for (const keyword of splitKeywords(seo.secondaryKeywordsCsv)) {
      keywordSet.add(keyword);
    }
  }

  const keywords = keywordSet.size > 0 ? Array.from(keywordSet) : undefined;

  return {
    title: resolvedTitle,
    description,
    keywords,
    alternates,
    openGraph: {
      type: "article",
      url: canonicalPath,
      title: ogTitle,
      description: ogDescription,
      publishedTime: `${post.publishedAtIso}T00:00:00.000Z`,
      images: [
        {
          url: post.heroImageSrc,
          alt: post.heroImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: ogDescription,
      images: [post.heroImageSrc],
    },
    other: seo
      ? {
          "focus-keyphrase": seo.focusKeyphrase,
        }
      : undefined,
  };
}

export default async function BlogArticlePage({ params }: BlogArticlePageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const seo = getBlogSeoBySlug(slug);
  const canonicalPath = seo?.canonicalPath ?? `/blog/${post.slug}`;
  const description = seo?.metaDescription ?? post.excerpt;
  const articleUrl = buildLocalizedAbsoluteUrl(canonicalPath);
  const articleId = `${articleUrl}#article`;
  const blogId = `${buildLocalizedAbsoluteUrl("/blog")}#blog`;
  const readMinutes = parseReadMinutes(post.readTimeLabel);
  const articleBody = post.content
    .flatMap((section) => section.paragraphs)
    .map(stripMarkdownLinks)
    .join("\n\n");

  const { webPageSchema } = buildWebPageSchema({
    path: canonicalPath,
    title: seo?.metaTitle ?? post.title,
    description,
    mainEntityId: articleId,
  });

  const blogPostingSchema = {
    "@type": "BlogPosting",
    "@id": articleId,
    headline: post.title,
    description,
    url: articleUrl,
    image: [new URL(post.heroImageSrc, siteConfig.siteUrl).toString()],
    datePublished: `${post.publishedAtIso}T00:00:00.000Z`,
    dateModified: `${post.publishedAtIso}T00:00:00.000Z`,
    articleSection: post.category,
    inLanguage: DEFAULT_LOCALE,
    keywords: seo?.secondaryKeywordsCsv,
    articleBody,
    mainEntityOfPage: {
      "@id": `${articleUrl}#webpage`,
    },
    isPartOf: {
      "@id": blogId,
    },
    author: {
      "@id": ORGANIZATION_ID,
    },
    publisher: {
      "@id": ORGANIZATION_ID,
    },
    timeRequired: readMinutes ? `PT${readMinutes}M` : undefined,
  };

  const faqItems =
    post.slug === "ai-wont-always-make-you-faster"
      ? AI_WONT_ALWAYS_MAKE_YOU_FASTER_FAQ_ITEMS
      : post.slug === "what-are-ai-ethics"
        ? WHAT_ARE_AI_ETHICS_FAQ_ITEMS
        : post.slug === "why-ai-projects-fail"
          ? WHY_AI_PROJECTS_FAIL_FAQ_ITEMS
          : post.slug === "what-are-ai-agents"
            ? WHAT_ARE_AI_AGENTS_FAQ_ITEMS
            : post.slug === "one-ai-is-not-a-team"
              ? ONE_AI_IS_NOT_A_TEAM_FAQ_ITEMS
              : post.slug === "what-is-an-ai-hallucination"
                ? WHAT_IS_AN_AI_HALLUCINATION_FAQ_ITEMS
        : null;

  const faqSchema = faqItems
    ? {
        "@type": "FAQPage",
        "@id": `${articleUrl}#faq`,
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      }
    : null;

  const articleSchema = {
    "@context": "https://schema.org",
    "@graph": faqSchema
      ? [...buildSiteSchemaNodes(), webPageSchema, blogPostingSchema, faqSchema]
      : [...buildSiteSchemaNodes(), webPageSchema, blogPostingSchema],
  };

  return (
    <PageFrame>
      <JsonLd id={`blog-article-schema-${post.slug}`} data={articleSchema} />
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <BlogArticleContent post={post} />
      </main>
      <SiteFooter />
    </PageFrame>
  );
}
