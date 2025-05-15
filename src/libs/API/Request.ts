import axios, { AxiosRequestConfig } from "axios";

const uri = "http://localhost:8080/api/v1"

export default async function request(route: string, { method = "post", data }: AxiosRequestConfig) {
    const url = uri + route;
    return await axios({ method, url, data });
}