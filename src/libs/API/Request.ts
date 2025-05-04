import axios from "axios";

const uri = "http://127.0.0.0:8080/api/v1/"

interface RequestData {
    method: string,
    url: string,
    data: object
}

export class Request implements RequestData {
    method: string;
    url: string;
    data: object;

    constructor({ method, url, data }: RequestData) {
        this.method = method;
        this.url = url;
        this.data = data;
    }

    async send() {
        return await axios({
            method: this.method,
            url: this.url,
            data: this.data
        });
    }
}