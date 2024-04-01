import { getAboutPage } from "@/data/loaders";
import { aboutBlockRenderer } from "@/lib/block-renderer";

export default async function AboutUs() {
  const { blocks } = await getAboutPage();

  if (!blocks) return <div>No blocks found</div>;

  return (
    <main className="[&>*:nth-child(even)]:bg-gray">
      {blocks.map((block: any) => aboutBlockRenderer(block))}
    </main>
  );
}
