import axios, { AxiosRequestConfig } from "axios";

const uri = "http://127.0.0.0:8080/api/v1/"

export default async function request(route: string, { method, data }: AxiosRequestConfig) {
    const url = uri + route;
    return await axios({ method, url, data });
}