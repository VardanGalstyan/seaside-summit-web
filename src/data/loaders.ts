import qs from "qs";

const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL;

async function fetchData(url: string) {
  const authToken = null;
  const headers = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    },
  };

  try {
    const response = await fetch(
      url,
      authToken ? headers : { cache: "no-cache" }
    );

    const { data } = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // or return null;
  }
}

export async function getLayoutPage() {
  const url = new URL("/api/layout", baseUrl);

  url.search = qs.stringify({
    populate: [
      "header.navbar",
      "header.ctaLink",
      "header.brandLogo",
      "header.brandLink",
      "footer.brandLink",
      "footer.navLinks",
      "footer.addressLinks",
      "footer.socialLinks",
      "footer.brandLogo",
      "createdBy",
      "updatedBy",
    ],
  });

  return fetchData(url.href);
}

export async function getHomePage() {
  const url = new URL("/api/homepage", baseUrl);

  url.search = qs.stringify({
    populate: [
      "blocks.quotes",
      "blocks.stats",
      "blocks.ctaLink",
      "blocks.partners",
      "blocks.spotlight",
      "blocks.header",
      "blocks.accelerators",
      "blocks.accelerators.logo",
      "createdBy",
      "updatedBy",
    ],
  });

  return fetchData(url.href);
}

export async function getAboutPage() {
  const url = new URL("/api/about-page", baseUrl);

  url.search = qs.stringify({
    populate: [
      "blocks.about-general",
      "blocks.ctaLink",
      "blocks.media",
      "blocks.header",
      "blocks.propositions",
      "blocks.media.media",
      "blocks.teamMembers",
      "blocks.teamMembers.image",
    ],
  });

  return fetchData(url.href);
}

export async function getPartnersPage() {
  const url = new URL("/api/partners-page", baseUrl);

  url.search = qs.stringify({
    populate: [
      "blocks.header",
      "blocks.partner-swiper",
      "blocks.partners-swiper-detailed",
      "blocks.partners-benefits",
      "blocks.partners-apply",
      "blocks.steps",
      "blocks.benefits",
      "blocks.benefits.icon",
      "blocks.steps.icon",
      "blocks.partners",
      "blocks.partners.logo",
      "createdBy",
      "updatedBy",
    ],
  });

  return fetchData(url.href);
}

export async function getEventsPage() {
  const url = new URL(`/api/event-page/`, baseUrl);

  url.search = qs.stringify({
    populate: [
      "blocks.header",
      "events",
      "events.cover",
      "events.partners",
      "events.partners.logo",
      "events.partners.images",
      "events.amenities",
      "events.organizers",
      "events.speakers",
      "events.tracks",
      "events.tracks.icon",
      "events.startups",
      "events.aboutEvent",
      "events.statistics",
      "events.eventValues",
      "events.roadmap",
      "events.roadmap.steps",
      "events.roadmap.header",
      "events.roadmap.ctaLink",
      "events.programm",
      "events.programm.header",
      "events.programm.title",
      "events.programm.ctaLink",
      "events.programm.tracks",
      "events.join",
      "events.join.header",
      "events.join.steps",
      "events.join.ctaLink",
    ],
  });

  return fetchData(url.href);
}

export async function getSingleEventPage(slug: string) {
  const url = new URL(`/api/events/${slug}`, baseUrl);

  url.search = qs.stringify({
    populate: [
      "event.partners",
      "join",
      "statistics",
      "statistics.stats",
      "aboutEvent.header",
      "aboutEvent.header.icon",
      "eventValues",
      "eventValues.propositions",
      "eventValues.ctaLink",
      "eventValues.header",
      "roadmap.header",
      "roadmap.ctaLink",
      "roadmap.steps",
      "roadmap.steps.icon",
      "join.header",
      "join.steps",
      "join.steps.icon",
      "join",
      "programm.header",
      "programm.description",
      "programm.description.icon",
      "programm.ctaLink",
      "programm.tracks",
      "programm.tracks.icon",
      "tracks",
    ],
  });

  return fetchData(url.href);
}
