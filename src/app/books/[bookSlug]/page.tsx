import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { booksPages, booksPagesBySlug } from "@/app/data/booksPages";
import PageContent from "@/app/components/PageContent";

type Props = {
  params: Promise<{ bookSlug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { bookSlug } = await params;
  const page = booksPagesBySlug[bookSlug];
  if (!page) return { title: "Page Not Found - BabyPillars" };
  return {
    title: `${page.title} - BabyPillars`,
    description: page.metaDescription || "",
  };
}

export function generateStaticParams() {
  return booksPages
    .filter((page) => page.slug !== "books")
    .map((page) => ({ bookSlug: page.slug }));
}

export default async function DynamicPage({ params }: Props) {
  const { bookSlug } = await params;
  const page = booksPagesBySlug[bookSlug];
  if (!page) notFound();
  return <PageContent page={page} />;
}
