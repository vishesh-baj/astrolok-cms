import axios from "axios";
export const API_WRAPPER = axios.create({
  baseURL: "https://localhost:4000.com",
  timeout: 5000, // Set a timeout value (in milliseconds) for requests
  headers: {
    "Content-Type": "application/json", // Set the default Content-Type header
    // Add any additional headers you need
  },
});
