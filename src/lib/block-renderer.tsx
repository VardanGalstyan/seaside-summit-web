import AboutGeneral from "@/components/about-general";
import Accelerators from "@/components/accelerators";
import Benefits from "@/components/benefits";
import CompanyValues from "@/components/company-values";
import Gallery from "@/components/gallery";
import JoinOurTeam from "@/components/join-our-team";
import JoinUs from "@/components/join-us";
import PartnerSwiper from "@/components/partner-swiper";
import PartnersDetailed from "@/components/partners-detailed";
import Spotlight from "@/components/spotlight";
import Statistics from "@/components/statistics";
import Steps from "@/components/steps";
import Team from "@/components/team";
import Testimonials from "@/components/testimonials";

export const homeBlockRenderer = (block: any) => {
  switch (block.__component) {
    case "component.testimonials":
      return <Testimonials key={block.__component} data={block} />;
    case "component.statistics":
      return <Statistics key={block.__component} data={block} />;
    case "component.spotlight":
      return (
        <Spotlight
          key={block.__component}
          data={block?.spotlight?.spotlight_data}
        />
      );
    case "component.accelerators":
      return <Accelerators key={block.__component} data={block} />;
    case "component.join-us":
      return (
        <JoinUs key={block.__component} data={block?.join_us?.join_us_data} />
      );
    default:
      return null;
  }
};

export const aboutBlockRenderer = (block: any) => {
  switch (block.__component) {
    case "component.value":
      return <CompanyValues key={block.id} data={block} />;
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
      return <Benefits key={block.__component} data={block} />;
    case "component.partners-apply":
      return <Steps key={block.__component} data={block} />;
    case "component.partners-swiper-detailed":
      return <PartnersDetailed key={block.__component} data={block} />;
    case "component.partner-swiper":
      return <PartnerSwiper key={block.__component} data={block} />;

    default:
      return null;
  }
};

export const eventsBlockRenderer = (block: any) => {
  switch (block.__component) {
    case "component.spotlight":
      return (
        <Spotlight
          key={block.__component}
          data={block?.spotlight?.spotlight_data}
        />
      );
    case "component.join-us":
      return (
        <JoinUs key={block.__component} data={block?.join_us?.join_us_data} />
      );

    default:
      return null;
  }
};
