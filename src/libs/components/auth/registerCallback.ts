import { APIUsersRegister } from "@/libs/API/users/Auth";
import { hash } from "@/libs/scripts/hash";

import { FormEvent } from "react";
import { showErrorMessage, showSuccessMessage } from "../tip";

export default async function registerCallback(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const username = formData.get("username")?.toString();
    const password = formData.get("password")?.toString();

    if (!username || !password) return showErrorMessage("Введите хотя-бы один символ!");

    const APIregister = new APIUsersRegister({
        username,
        hashed_password: hash(password)
    });
    const res = await APIregister.register();
    if (res.status === 200) return showSuccessMessage("Пользователь успешно зарегистрирован!");
}