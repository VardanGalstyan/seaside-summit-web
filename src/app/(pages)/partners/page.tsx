import { partnersBlockRenderer } from "@/lib/block-renderer";
import { getPartnersPage } from "@/data/loaders";
import PageWrapper from "@/ui/wrappers/page-wrapper";

export default async function Partners() {
  const { blocks } = await getPartnersPage();

  if (!blocks) return <div>No blocks found</div>;

  return (
    <PageWrapper>
      {blocks.map((block: any) => partnersBlockRenderer(block))}
    </PageWrapper>
  );
}
