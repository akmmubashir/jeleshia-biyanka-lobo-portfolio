// import axios from "axios";

// export async function fetchEducationData() {
//   const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL;
//   const strapiToken = process.env.NEXT_PUBLIC_STRAPI_TOKEN;

//   try {
//     const res = await axios.get(`${strapiUrl}/educations`, {
//       headers: {
//         Authorization: `Bearer ${strapiToken}`,
//       },
//       next: { revalidate: 1000 },
//     });

//     if (!res.status === 200) {
//       throw new Error("Failed to fetch data");
//     }

//     return res.data.data;
//   } catch (error) {
//     console.error("Error fetching data from Strapi:", error);
//     throw error;
//   }
// }

// export async function fetchProfileData() {
//   const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL;
//   const strapiToken = process.env.NEXT_PUBLIC_STRAPI_TOKEN;

//   try {
//     const res = await axios.get(`${strapiUrl}/profile`, {
//       headers: {
//         Authorization: `Bearer ${strapiToken}`,
//       },
//       next: { revalidate: 1000 },
//     });

//     if (!res.status === 200) {
//       throw new Error("Failed to fetch data");
//     }

//     return res.data.data;
//   } catch (error) {
//     console.error("Error fetching data from Strapi:", error);
//     throw error;
//   }
// }
// export async function fetchContactData() {
//   const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL;
//   const strapiToken = process.env.NEXT_PUBLIC_STRAPI_TOKEN;

//   try {
//     const res = await axios.get(`${strapiUrl}/contact-info`, {
//       headers: {
//         Authorization: `Bearer ${strapiToken}`,
//       },
//       next: { revalidate: 1000 },
//     });

//     if (!res.status === 200) {
//       throw new Error("Failed to fetch data");
//     }

//     return res.data.data;
//   } catch (error) {
//     console.error("Error fetching data from Strapi:", error);
//     throw error;
//   }
// }
// export async function fetchSkillsData() {
//   const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL;
//   const strapiToken = process.env.NEXT_PUBLIC_STRAPI_TOKEN;

//   try {
//     const res = await axios.get(`${strapiUrl}/skills-lists`, {
//       headers: {
//         Authorization: `Bearer ${strapiToken}`,
//       },
//       next: { revalidate: 1000 },
//     });

//     if (!res.status === 200) {
//       throw new Error("Failed to fetch data");
//     }

//     return res.data.data;
//   } catch (error) {
//     console.error("Error fetching data from Strapi:", error);
//     throw error;
//   }
// }
import axios from "axios";

const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL;
const strapiToken = process.env.NEXT_PUBLIC_STRAPI_TOKEN;

async function fetchData(endpoint) {
  try {
    const res = await axios.get(`${strapiUrl}/${endpoint}`, {
      headers: {
        Authorization: `Bearer ${strapiToken}`,
      },
    });

    if (res.status !== 200) {
      throw new Error("Failed to fetch data");
    }

    return res.data.data;
  } catch (error) {
    console.error(`Error fetching data from Strapi (${endpoint}):`, error);
    throw error;
  }
}

export async function fetchEducationData() {
  return fetchData("educations");
}

export async function fetchProfileData() {
  return fetchData("profile");
}

export async function fetchContactData() {
  return fetchData("contact-info");
}

export async function fetchSkillsData() {
  return fetchData("skills-lists");
}

export async function getStaticProps() {
  try {
    const [educationData, profileData, contactData, skillsData] = await Promise.all([
      fetchEducationData(),
      fetchProfileData(),
      fetchContactData(),
      fetchSkillsData(),
    ]);

    return {
      props: {
        educationData,
        profileData,
        contactData,
        skillsData,
      },
    };
  } catch (error) {
    return {
      props: {
        educationData: [],
        profileData: [],
        contactData: [],
        skillsData: [],
      },
    };
  }
}

