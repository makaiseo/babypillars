import type { Metadata } from "next";
import { standalonePagesBySlug } from "@/app/data/standalonePages";
import PageContent from "@/app/components/PageContent";

const page = standalonePagesBySlug["newsletter"];

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
