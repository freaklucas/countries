import axios from "axios";

export const http = axios.create({
  baseURL: "https://restcountries.com/v2/",
});
