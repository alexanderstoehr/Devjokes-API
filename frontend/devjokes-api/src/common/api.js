import axios from "axios";

export const baseUrl = "https://devjokes-api-e9816b00214e.herokuapp.com/api";

export const api = axios.create({
    baseURL: baseUrl,
});
