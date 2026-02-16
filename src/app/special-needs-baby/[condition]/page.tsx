import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { specialNeedsPages, specialNeedsPagesBySlug } from "@/app/data/specialNeedsPages";
import PageContent from "@/app/components/PageContent";

type Props = {
  params: Promise<{ condition: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { condition } = await params;
  const page = specialNeedsPagesBySlug[condition];
  if (!page) return { title: "Page Not Found - BabyPillars" };
  return {
    title: `${page.title} - BabyPillars`,
    description: page.metaDescription || "",
  };
}

export function generateStaticParams() {
  return specialNeedsPages
    .filter((page) => page.slug !== "special-needs-baby")
    .map((page) => ({ condition: page.slug }));
}

export default async function DynamicPage({ params }: Props) {
  const { condition } = await params;
  const page = specialNeedsPagesBySlug[condition];
  if (!page) notFound();
  return <PageContent page={page} />;
}
