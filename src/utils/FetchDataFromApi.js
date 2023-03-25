import axios from "axios";

const Base_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: { maxresults: "50" },
  headers: {
    "X-RapidAPI-Key": process.env.RapidAPIKey,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchData = async (url) => {
  const { data } = await axios.get(`${Base_URL}/${url}`, options);
};
