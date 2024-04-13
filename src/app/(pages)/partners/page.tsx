import { getPartnersPage } from "@/data/loaders";
import { partnersBlockRenderer } from "@/lib/block-renderer";

export default async function Partners() {
  const { blocks } = await getPartnersPage();

  if (!blocks) return <div>No blocks found</div>;

  return (
    <main className="[&>*:nth-child(even)]:bg-gray">
      {blocks.map((block: any) => partnersBlockRenderer(block))}
    </main>
  );
}
