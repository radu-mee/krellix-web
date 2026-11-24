import type { Metadata } from "next";
import AgentModeView from "@/sections/home/AgentModeView";

export const metadata: Metadata = {
  title: "Krellix Agent Mode",
  robots: { index: false, follow: false },
};

type AgentModePageProps = {
  params: Promise<{ locale: string }>;
};

export default async function AgentModePage({ params }: AgentModePageProps) {
  const { locale } = await params;
  return <AgentModeView locale={locale} />;
}
