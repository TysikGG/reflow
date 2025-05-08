'use client';
import styles from "@/styles/app/auth/auth.module.css";

import Key from "@/favicons/svg/Key.svg";
import { MouseEventHandler, ReactNode, useState } from "react";

interface BaseAuthFormProps {
    title: string,
    tip: string,
    inputs: ReactNode,
    buttonTitle: string,
    secondary?: boolean,
    secondaryTitle?: string,
    secondaryButtonTitle?: ReactNode,
    tipCallback: MouseEventHandler,
    secondaryCallback?: MouseEventHandler
}

export default function AuthForm() {
    const [formType, setFormType] = useState<String>("login");

    function BaseAuthForm({ title, tip, inputs, buttonTitle, secondary, secondaryTitle, secondaryButtonTitle, tipCallback, secondaryCallback }: BaseAuthFormProps) {
        return (
            <div className={styles.container}>
                <section className={styles.loginContainer}>
                    <form className={styles.loginForm}>
                        <div className={styles.loginTitleContainer}>
                            <h1>{title}</h1>
                            <h3 onClick={tipCallback}>{tip}</h3>
                        </div>
                        {inputs}
                        <h3 style={{ display: secondary ? "flex" : "none" }}>
                            {secondaryTitle}
                        </h3>
                        <button
                            style={{ display: secondary ? "flex" : "none" }}
                            className={styles.buttonSecondary}
                            onClick={secondaryCallback}
                        >
                            {secondaryButtonTitle}
                        </button>
                        <button>{buttonTitle}</button>
                    </form>
                </section>
            </div>
        )
    }

    function AuthFormInputsConstructor(children: any) {
        return (
            <div className={styles.inputsContainer}>
                {...children.children}
            </div>
        )
    }

    if (formType === "login") {
        return (
            <BaseAuthForm
                title="Авторизация"
                tip="У меня нету аккаунта"
                inputs={
                    <AuthFormInputsConstructor
                        children={[
                            <input name="username" placeholder="Логин" />,
                            <input name="password" type="password" placeholder="Пароль" />
                        ]}
                    />
                }
                buttonTitle="Войти"
                tipCallback={() => setFormType("register")}
                secondary={true}
                secondaryTitle="ИЛИ"
                secondaryButtonTitle={(<><Key /> Войти по ключу</>)}
            />
        )
    } else if (formType === "register") {
        return (
            <BaseAuthForm
                title="Регистрация"
                tip="У меня уже есть аккаунт"
                inputs={
                    <AuthFormInputsConstructor
                        children={[
                            <input name="username" placeholder="Придумайте логин" />,
                            <input name="email" type="email" placeholder="Ваш email" />,
                            <input name="password" type="password" placeholder="Придумайте пароль" />
                        ]}
                    />
                }
                buttonTitle="Регистрация"
                tipCallback={() => setFormType("login")}
            />
        )
    }

}