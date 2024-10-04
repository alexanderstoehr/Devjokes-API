import axios from "axios";

export const baseUrl = "https://devjokes.alexander-stoehr.de/api";

export const api = axios.create({
    baseURL: baseUrl,
});
