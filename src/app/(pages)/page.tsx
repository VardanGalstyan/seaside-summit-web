import { getHomePage } from "@/data/loaders";
import { homeBlockRenderer } from "@/lib/block-renderer";
import PageWrapper from "@/ui/wrappers/page-wrapper";

export default async function Home() {
  const { blocks } = (await getHomePage()) ?? {};

  if (!blocks) return <div>No blocks found</div>;

  return (
    <PageWrapper>
      {blocks.map((block: any) => homeBlockRenderer(block))}
    </PageWrapper>
  );
}
