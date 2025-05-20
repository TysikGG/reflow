import axios, { Axios, AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
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
        let errorMessage = error;

        if (error instanceof AxiosError) {
            const axiosError = error as AxiosError;
            const responseData = axiosError["response"];
            if (responseData) {
                const response = responseData.data as { localeStatus: string };
                if (response.localeStatus) {
                    errorMessage = response.localeStatus;
                }
            }
        };

        showErrorMessage(String(errorMessage));
        throw error;
    }
}