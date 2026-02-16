import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { standalonePagesBySlug } from "@/app/data/standalonePages";
import PageContent from "@/app/components/PageContent";

type Props = {
  params: Promise<{ topicSlug: string }>;
};

const subPages = ["growth-spurts-in-babies"];

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { topicSlug } = await params;
  const page = standalonePagesBySlug[topicSlug];
  if (!page) return { title: "Page Not Found - BabyPillars" };
  return {
    title: `${page.title} - BabyPillars`,
    description: page.metaDescription || "",
  };
}

export function generateStaticParams() {
  return subPages.map((slug) => ({ topicSlug: slug }));
}

export default async function TopicPage({ params }: Props) {
  const { topicSlug } = await params;
  const page = standalonePagesBySlug[topicSlug];
  if (!page) notFound();
  return <PageContent page={page} />;
}
