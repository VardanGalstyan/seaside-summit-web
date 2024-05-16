import { aboutBlockRenderer } from "@/lib/block-renderer";
import { getAboutPage } from "@/data/loaders";
import PageWrapper from "@/ui/wrappers/page-wrapper";

export default async function AboutUs() {
  const { blocks } = (await getAboutPage()) ?? {};

  if (!blocks) return <div>No blocks found</div>;

  return (
    <PageWrapper>
      {blocks.map((block: any) => aboutBlockRenderer(block))}
    </PageWrapper>
  );
}
