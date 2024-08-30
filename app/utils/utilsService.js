// import axios from "axios";

// export async function fetchEducationData() {
//   const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL;
//   const strapiToken = process.env.NEXT_PUBLIC_STRAPI_TOKEN;

//   try {
//     const res = await axios.get(`${strapiUrl}/educations`, {
//       headers: {
//         Authorization: `Bearer ${strapiToken}`,
//       },
//       // next: { revalidate: 1000 },
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
//       // next: { revalidate: 1000 },
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
//       // next: { revalidate: 1000 },
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
//       // next: { revalidate: 1000 },
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

const fetchData = async (endpoint) => {
  const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL;
  const strapiToken = process.env.NEXT_PUBLIC_STRAPI_TOKEN;

  try {
    const res = await axios.get(`${strapiUrl}/${endpoint}`, {
      headers: {
        Authorization: `Bearer ${strapiToken}`,
        "Cache-Control": "no-store",
      },
    });

    if (res.status !== 200) {
      throw new Error("Failed to fetch data");
    }

    return res.data.data;
  } catch (error) {
    console.error(`Error fetching ${endpoint} data from Strapi:`, error);
    throw error;
  }
};

export const fetchEducationData = async () => {
  return await fetchData('educations');
};

export const fetchProfileData = async () => {
  return await fetchData('profile');
};

export const fetchContactData = async () => {
  return await fetchData('contact-info');
};

export const fetchSkillsData = async () => {
  return await fetchData('skills-lists');
};

// Utility function to fetch data with revalidation
const fetchWithRevalidation = async (key, fetchFunction, revalidateInterval) => {
  const cachedData = JSON.parse(localStorage.getItem(key));
  const lastFetchTime = localStorage.getItem(`${key}_fetchTime`);

  const now = Date.now();

  if (cachedData && lastFetchTime && (now - lastFetchTime < revalidateInterval * 1000)) {
    return cachedData;
  }

  const data = await fetchFunction();
  localStorage.setItem(key, JSON.stringify(data));
  localStorage.setItem(`${key}_fetchTime`, now.toString());

  return data;
};

const revalidateInterval = 3600; // in seconds

export const getEducationData = async () => {
  return await fetchWithRevalidation('educationData', fetchEducationData, revalidateInterval);
};

export const getProfileData = async () => {
  return await fetchWithRevalidation('profileData', fetchProfileData, revalidateInterval);
};

export const getContactData = async () => {
  return await fetchWithRevalidation('contactData', fetchContactData, revalidateInterval);
};

export const getSkillsData = async () => {
  return await fetchWithRevalidation('skillsData', fetchSkillsData, revalidateInterval);
};
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

export async function getStaticProps() {
  const data = await fetchEducationData();

  return {
    props: {
      data,
    },
    revalidate: 10, // Revalidate every 10 seconds
  };
}
