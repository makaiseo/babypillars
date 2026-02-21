import type { Metadata } from "next";
import { canonical } from '../lib/seo';
import { standalonePagesBySlug } from "@/app/data/standalonePages";
import PageContent from "@/app/components/PageContent";

const page = standalonePagesBySlug["torticollis"];

export const metadata: Metadata = {
  ...canonical('/torticollis/'),
  title: page?.title ? `${page.title} - BabyPillars` : "BabyPillars",
  description: page?.metaDescription || "",
  openGraph: {
    title: page?.title ? `${page.title} - BabyPillars` : "BabyPillars",
    description: page?.metaDescription || "",
    ...(page?.featuredImage && { images: [{ url: page.featuredImage, width: 1200, height: 630, alt: page?.title || "BabyPillars" }] }),
  },
  twitter: {
    card: "summary_large_image",
    title: page?.title ? `${page.title} - BabyPillars` : "BabyPillars",
    description: page?.metaDescription || "",
    ...(page?.featuredImage && { images: [page.featuredImage] }),
  },
};

export default function Page() {
  if (!page) return null;
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "MedicalWebPage", "name": "Torticollis in Babies - Guide for Parents", "url": "https://babypillars.com/torticollis/", "description": "Expert guide to torticollis in babies - causes, symptoms, exercises, and treatment.", "about": {"@type": "MedicalCondition", "name": "Torticollis"}, "author": {"@type": "Person", "name": "Anat Furstenberg", "url": "https://babypillars.com/about-babypillars"}}) }} />
      <PageContent page={page} />
    </>
  );
}
