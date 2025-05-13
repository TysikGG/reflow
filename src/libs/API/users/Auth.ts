import request from "../Request";

interface APIUsersRegisterProps {
    username: string,
    hashed_password: string
}

export class APIUsersRegister implements APIUsersRegisterProps {
    username: string
    hashed_password: string

    constructor({ username, hashed_password }: APIUsersRegisterProps) {
        this.username = username;
        this.hashed_password = hashed_password
    }

    async register() {
        await request("/users/auth/register", {data: {
            username: this.username,
            hashed_password: this.hashed_password
        }})
    }
}

interface APIUsersLoginProps {
    username: string,
    hashed_password: string
}

export class APIUsersLogin implements APIUsersLoginProps {
    username: string
    hashed_password: string

    constructor({ username, hashed_password }: APIUsersLoginProps) {
        this.username = username;
        this.hashed_password = hashed_password
    }

    async login() {
        await request("/users/auth/login", {data: {
            username: this.username,
            hashed_password: this.hashed_password
        }})
    }
}