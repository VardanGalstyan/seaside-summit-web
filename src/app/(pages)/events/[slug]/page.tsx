import Steps from "@/components/steps";
import Programms from "@/components/programms";
import Statistics from "@/components/statistics";
import Information from "@/components/information";
import PageWrapper from "@/ui/wrappers/page-wrapper";
import AboutGeneral from "@/components/about-general";
import CompanyValues from "@/components/company-values";
import { getSingleEventPage } from "@/data/loaders";
import { InformationType } from "@/components/information/types";

export default async function Event({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams?: { category: keyof InformationType };
}) {
  const data = await getSingleEventPage(params.slug);

  return (
    <PageWrapper>
      <AboutGeneral data={data.aboutEvent} />
      <Statistics data={data.statistics} />
      <CompanyValues data={data.eventValues} />
      <Steps data={data.roadmap} />
      <Steps data={data.join} />
      <Programms data={data.programm} />
      <Information data={data.information} query={searchParams} />
    </PageWrapper>
  );
}
