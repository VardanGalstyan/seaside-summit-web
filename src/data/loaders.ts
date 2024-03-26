import qs from "qs";
import { flattenAttributes, getStrapiURL } from "@/lib/utils";

const baseUrl = getStrapiURL();

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
    const data = await response.json();
    return flattenAttributes(data);
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

  return await fetchData(url.href);
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

  return await fetchData(url.href);
}
