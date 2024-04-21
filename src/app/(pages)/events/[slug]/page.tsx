import AboutGeneral from "@/components/about-general";
import CompanyValues from "@/components/company-values";
import HowToApply from "@/components/how-to-apply";
import Statistics from "@/components/statistics";
import { getSingleEventPage } from "@/data/loaders";
import PageWrapper from "@/ui/wrappers/page-wrapper";

export default async function Event({ params }: { params: { slug: string } }) {
  const data = await getSingleEventPage(params.slug);
  return (
    <PageWrapper>
      <AboutGeneral data={data.aboutEvent} />
      <Statistics data={data.statistics} />
      <CompanyValues data={data.eventValues} />
      <HowToApply data={data.roadmap} />
    </PageWrapper>
  );
}
