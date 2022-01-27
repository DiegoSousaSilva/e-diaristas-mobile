import axios from "axios";
//http://127.0.0.1:8000

const url = "http://192.168.2.43:8000";

export const ApiService = axios.create({
  baseURL: url,
  headers: {
    "Content-Type": "application/json",
  },
});
