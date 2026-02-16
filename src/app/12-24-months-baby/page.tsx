import type { Metadata } from "next";
import { ageRangePagesBySlug } from "@/app/data/ageRangePages";
import PageContent from "@/app/components/PageContent";

const page = ageRangePagesBySlug["12-24-months-baby"];

export const metadata: Metadata = {
  title: page?.title ? `${page.title} - BabyPillars` : "BabyPillars",
  description: page?.metaDescription || "",
};

export default function Page() {
  if (!page) return null;
  return <PageContent page={page} />;
}
