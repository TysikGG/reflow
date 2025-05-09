import request from "../Request";

interface APIUsersRegisterProps {
    username: string,
    email: string,
    hashed_password: string
}

export class APIUsersRegister implements APIUsersRegisterProps {
    username: string
    email: string
    hashed_password: string

    constructor({ username, email, hashed_password }: APIUsersRegisterProps) {
        this.username = username;
        this.email = email;
        this.hashed_password = hashed_password
    }

    async register() {
        await request("/users/auth/register", {data: {
            username: this.username,
            email: this.email,
            hashed_password: this.hashed_password
        }})
    }
}

interface APIUsersLoginProps {
    usernameOrEmail: string,
    hashed_password: string
}

export class APIUsersLogin implements APIUsersLoginProps {
    usernameOrEmail: string
    hashed_password: string

    constructor({ usernameOrEmail, hashed_password }: APIUsersLoginProps) {
        this.usernameOrEmail = usernameOrEmail;
        this.hashed_password = hashed_password
    }

    async login() {
        await request("/users/auth/login", {data: {
            usernameOrEmail: this.usernameOrEmail,
            hashed_password: this.hashed_password
        }})
    }
}