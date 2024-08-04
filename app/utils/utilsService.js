import axios from "axios";

export async function fetchEducationData() {
  const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL;
  const strapiToken = process.env.NEXT_PUBLIC_STRAPI_TOKEN;

  try {
    const res = await axios.get(`${strapiUrl}/educations`, {
      headers: {
        Authorization: `Bearer ${strapiToken}`,
      },
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
