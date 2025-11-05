import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";

export const fetchFromAPI = async (url, params = {}) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/${url}`, {
      headers: {
        // "x-rapidapi-key": import.meta.env.VITE_RAPID_API_KEY,
        // "x-rapidapi-host": "youtube138.p.rapidapi.com",
        'x-rapidapi-key': 'd66d31ba65msh596aa025e6f218dp1f2209jsnaaf3472fbb61',
        'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
      },
      params,
    });
    return data;
  } catch (error) {
    console.error("❌ API Fetch Error:", error.response?.data || error.message);
    return {};
  }
};
