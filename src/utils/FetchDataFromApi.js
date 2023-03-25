import axios from "axios";

const Base_URL = "https://youtube-v31.p.rapidapi.com/captions";

const options = {
  url: Base_URL,
  params: { part: "snippet" },
  headers: {
    "X-RapidAPI-Key": process.env.X - RapidAPI - Key,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};
