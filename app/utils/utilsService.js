import axios from "axios";

export async function fetchEducationData() {
  const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL;
  const strapiToken = process.env.NEXT_PUBLIC_STRAPI_TOKEN;

  try {
    const res = await axios.get(`${strapiUrl}/educations`, {
      headers: {
        Authorization: `Bearer ${strapiToken}`,
      },
      next: { revalidate: 0 },
    });

    if (!res.status === 200) {
      throw new Error("Failed to fetch data");
    }

    return res.data.data;
  } catch (error) {
    console.error("Error fetching data from Strapi:", error);
    throw error;
  }
}

export async function fetchProfileData() {
  const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL;
  const strapiToken = process.env.NEXT_PUBLIC_STRAPI_TOKEN;

  try {
    const res = await axios.get(`${strapiUrl}/profile`, {
      headers: {
        Authorization: `Bearer ${strapiToken}`,
      },
      next: { revalidate: 0 },
    });

    if (!res.status === 200) {
      throw new Error("Failed to fetch data");
    }

    return res.data.data;
  } catch (error) {
    console.error("Error fetching data from Strapi:", error);
    throw error;
  }
}
export async function fetchContactData() {
  const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL;
  const strapiToken = process.env.NEXT_PUBLIC_STRAPI_TOKEN;

  try {
    const res = await axios.get(`${strapiUrl}/contact-info`, {
      headers: {
        Authorization: `Bearer ${strapiToken}`,
      },
      next: { revalidate: 0 },
    });

    if (!res.status === 200) {
      throw new Error("Failed to fetch data");
    }

    return res.data.data;
  } catch (error) {
    console.error("Error fetching data from Strapi:", error);
    throw error;
  }
}
export async function fetchSkillsData() {
  const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL;
  const strapiToken = process.env.NEXT_PUBLIC_STRAPI_TOKEN;

  try {
    const res = await axios.get(`${strapiUrl}/skills-lists`, {
      headers: {
        Authorization: `Bearer ${strapiToken}`,
      },
      next: { revalidate: 0 },
    });

    if (!res.status === 200) {
      throw new Error("Failed to fetch data");
    }

    return res.data.data;
  } catch (error) {
    console.error("Error fetching data from Strapi:", error);
    throw error;
  }
}
