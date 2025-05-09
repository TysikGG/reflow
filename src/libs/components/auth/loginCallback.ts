import { APIUsersLogin } from "@/libs/API/users/Auth";
import { hash } from "@/libs/scripts/hash";

import { FormEvent } from "react";
import { showErrorMessage } from "../tip";

export default function loginCallback(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const usernameOrEmail = formData.get("usernameOrEmail")?.toString();
    const password = formData.get("password")?.toString();

    if (!usernameOrEmail || !password) return showErrorMessage("Введите хотя-бы один символ!");

    const APIlogin = new APIUsersLogin({
        usernameOrEmail,
        hashed_password: hash(password)
    })

    APIlogin.login();
}