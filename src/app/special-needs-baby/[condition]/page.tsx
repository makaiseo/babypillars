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
    alternates: { canonical: `https://babypillars.com/special-needs-baby/${condition}/` },
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: page!.title,
    description: page!.metaDescription || "",
    url: `https://babypillars.com/special-needs-baby/${condition}/`,
    about: { "@type": "MedicalCondition", name: page!.title },
    author: { "@type": "Person", name: "Anat Furstenberg", url: "https://babypillars.com/about-babypillars" },
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageContent page={page!} />
    </>
  );
}