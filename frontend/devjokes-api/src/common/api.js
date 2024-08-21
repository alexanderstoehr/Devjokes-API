import axios from "axios";

export const baseUrl = "https://devjokes.com/api";

export const api = axios.create({
    baseURL: baseUrl,
});
