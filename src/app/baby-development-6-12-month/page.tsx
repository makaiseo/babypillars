import type { Metadata } from "next";
import { ageRangePagesBySlug } from "@/app/data/ageRangePages";
import PageContent from "@/app/components/PageContent";

const page = ageRangePagesBySlug["baby-development-6-12-month"];

export const metadata: Metadata = {
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
  return <PageContent page={page} />;
}
