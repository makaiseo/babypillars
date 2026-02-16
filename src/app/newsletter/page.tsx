import type { Metadata } from "next";
import { standalonePagesBySlug } from "@/app/data/standalonePages";
import PageContent from "@/app/components/PageContent";

const page = standalonePagesBySlug["newsletter"];

export const metadata: Metadata = {
  title: page?.title ? `${page.title} - BabyPillars` : "BabyPillars",
  description: page?.metaDescription || "",
};

export default function Page() {
  if (!page) return null;
  return <PageContent page={page} />;
}
