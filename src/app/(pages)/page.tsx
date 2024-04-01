import { getHomePage } from "@/data/loaders";
import { homeBlockRenderer } from "@/lib/block-renderer";

export default async function Home() {
  const { blocks } = await getHomePage();

  if (!blocks) return <div>No blocks found</div>;

  //TODO update the arbitrary value and get it configured
  return (
    <main className="[&>*:nth-child(even)]:bg-gray">
      {blocks.map((block: any) => homeBlockRenderer(block))}
    </main>
  );
}
