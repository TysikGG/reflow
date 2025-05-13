import { APIUsersLogin } from "@/libs/API/users/Auth";
import { hash } from "@/libs/scripts/hash";

import { FormEvent } from "react";
import { showErrorMessage } from "../tip";

export default function loginCallback(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const username = formData.get("username")?.toString();
    const password = formData.get("password")?.toString();

    if (!username || !password) return showErrorMessage("Введите хотя-бы один символ!");

    const APIlogin = new APIUsersLogin({
        username,
        hashed_password: hash(password)
    })

    APIlogin.login();
}