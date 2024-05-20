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
    throw error;
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
    ],
  });

  return fetchData(url.href);
}

export async function getHomePage() {
  const url = new URL("/api/homepage", baseUrl);

  url.search = qs.stringify({
    populate: [
      "blocks.header",
      "blocks.quotes",
      "blocks.stats",
      "blocks.ctaLink",
      "blocks.spotlight.spotlight_data.header",
      "blocks.spotlight.spotlight_data.ctaLink",
      "blocks.spotlight.spotlight_data.image",
      "blocks.join_us.join_us_data.header",
      "blocks.accelerators.logo",
    ],
  });

  return fetchData(url.href);
}

export async function getAboutPage() {
  const url = new URL("/api/about-page", baseUrl);

  url.search = qs.stringify({
    populate: [
      "blocks.ctaLink",
      "blocks.header",
      "blocks.about-general",
      "blocks.propositions",
      "blocks.media.media",
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
      "blocks.benefits.icon",
      "blocks.steps.icon",
      "blocks.partners.logo",
    ],
  });

  return fetchData(url.href);
}

export async function getEventsPage() {
  const url = new URL(`/api/event-page/`, baseUrl);

  url.search = qs.stringify({
    populate: [
      "events",
      "events.cover",
      "blocks.spotlight.spotlight_data.header",
      "blocks.spotlight.spotlight_data.ctaLink",
      "blocks.spotlight.spotlight_data.image",
      "blocks.join_us.join_us_data.header",
    ],
  });

  return fetchData(url.href);
}

export async function getSingleEventPage(slug: string) {
  const url = new URL(`/api/events/${slug}`, baseUrl);

  url.search = qs.stringify({
    populate: [
      "event.partners",
      "statistics.stats",
      "aboutEvent.header.icon",
      "eventValues.propositions",
      "eventValues.ctaLink",
      "eventValues.header",
      "roadmap.header",
      "roadmap.ctaLink",
      "roadmap.steps.icon",
      "join.ctaLink",
      "join.header",
      "join.steps.icon",
      "programm.header",
      "programm.description.icon",
      "programm.ctaLink",
      "programm.tracks.icon",
      "information.header",
      "information.paragraph",
      "information.entertainments.icon",
      "information.rules.icon",
      "information.weather",
      "information.amenities.icon",
      "volunteer_section.steps.header",
      "volunteer_section.steps.ctaLink",
      "tracks",
    ],
  });

  return fetchData(url.href);
}
