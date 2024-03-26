import Spotlight from "@/components/spotlight";
import Statistics from "@/components/statistics";
import Testimonials from "@/components/testimonials";
import Accelerators from "@/components/accelerators";
import JoinUs from "@/components/join-us";

const homeBlockRenderer = (block: any) => {
  switch (block.__component) {
    case "component.testimonials":
      return <Testimonials key={block.id} data={block} />;
    case "component.statistics":
      return <Statistics key={block.id} data={block} />;
    case "component.spotlight":
      return <Spotlight key={block.id} data={block} />;
    case "component.accelerators":
      return <Accelerators key={block.id} data={block} />;
    case "component.join-us":
      return <JoinUs key={block.id} data={block} />;
    default:
      return null;
  }
};

export default homeBlockRenderer;
