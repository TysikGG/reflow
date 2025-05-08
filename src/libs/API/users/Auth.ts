import request from "../Request";

interface APIUserAuthProps {
    username: string,
    email: string,
    hashed_password: string
}

export default class APIUserAuth implements APIUserAuthProps {
    username: string
    email: string
    hashed_password: string

    constructor({ username, email, hashed_password }: APIUserAuthProps) {
        this.username = username;
        this.email = email;
        this.hashed_password = hashed_password
    }

    async register() {
        await request("/users/register", {data: {
            username: this.username,
            email: this.email,
            hashed_password: this.hashed_password
        }})
    }
}