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

export async function fetchEducationData() {
  const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL;
  const strapiToken = process.env.NEXT_PUBLIC_STRAPI_TOKEN;

  try {
    const res = await axios.get(`${strapiUrl}/educations`, {
      headers: {
        Authorization: `Bearer ${strapiToken}`,
      },
    });

    if (res.status !== 200) {
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
    });

    if (res.status !== 200) {
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
    });

    if (res.status !== 200) {
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
    });

    if (res.status !== 200) {
      throw new Error("Failed to fetch data");
    }

    return res.data.data;
  } catch (error) {
    console.error("Error fetching data from Strapi:", error);
    throw error;
  }
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
      revalidate: 1000, // revalidate every 1000 seconds
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

// const HomePage = ({ educationData, profileData, contactData, skillsData }) => {
//   // Render your data here
// };

// export default HomePage;

