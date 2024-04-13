import Spotlight from "@/components/spotlight";
import Statistics from "@/components/statistics";
import Testimonials from "@/components/testimonials";
import Accelerators from "@/components/accelerators";
import JoinUs from "@/components/join-us";
import Promise from "@/components/promise";
import Team from "@/components/team";
import AboutGeneral from "@/components/about-general";
import JoinOurTeam from "@/components/join-our-team";
import Gallery from "@/components/gallery";
import Benefits from "@/components/benefits";

export const homeBlockRenderer = (block: any) => {
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

export const aboutBlockRenderer = (block: any) => {
  switch (block.__component) {
    case "component.promise":
      return <Promise key={block.id} data={block} />;
    case "component.team":
      return <Team key={block.id} data={block} />;
    case "component.about-general":
      return <AboutGeneral key={block.id} data={block} />;
    case "component.join-us":
      return <JoinOurTeam key={block.id} data={block} />;
    case "component.gallery":
      return <Gallery key={block.id} data={block} />;
    default:
      return null;
  }
};

export const partnersBlockRenderer = (block: any) => {
  switch (block.__component) {
    case "component.partners-benefits":
      return <Benefits key={block.id} data={block} />;

    default:
      return null;
  }
};
