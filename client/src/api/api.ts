// import dotenv from "dotenv";
// dotenv.config();
const apiFetchOptions = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: import.meta.env.VITE_TOKEN,
  },
};

const base_url = "http://image.tmdb.org/t/p/w500";

const apiURL = "https://api.themoviedb.org/3";

export { apiFetchOptions, apiURL, base_url };
