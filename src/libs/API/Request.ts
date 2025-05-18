import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { showErrorMessage } from "../components/tip";

const uri = "http://localhost:8080/api/v1"

export default async function request(
    route: string,
    { method = "post", data }: AxiosRequestConfig
): Promise<AxiosResponse> {
    const url = uri + route;
    try {
        return await axios({ method, url, data });
    } catch (error) {
        showErrorMessage(`${error}`);
        throw error;
    }
}