'use client';

import { FormEventHandler, MouseEventHandler, ReactNode, useState } from "react";

import styles from "@/styles/app/auth/auth.module.css";
import Key from "@/favicons/svg/Key.svg";
import loginCallback from "@/libs/components/auth/loginCallback";
import registerCallback from "@/libs/components/auth/registerCallback";

interface BaseAuthFormProps {
    title: string,
    tip: string,
    inputs: ReactNode,
    buttonTitle: string,
    secondary?: boolean,
    secondaryTitle?: string,
    secondaryButtonTitle?: ReactNode,
    submitCallback?: FormEventHandler,
    tipCallback?: MouseEventHandler,
    secondaryCallback?: MouseEventHandler
}

export default function AuthForm() {
    const [formType, setFormType] = useState<String>("login");

    function BaseAuthForm({ title, tip, inputs, buttonTitle, secondary, secondaryTitle, secondaryButtonTitle, submitCallback, tipCallback, secondaryCallback }: BaseAuthFormProps) {
        return (
            <div className={styles.container}>
                <section className={styles.loginContainer}>
                    <form className={styles.loginForm} onSubmit={submitCallback}>
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
                            <input
                                key="1"
                                name="username"
                                minLength={4}
                                maxLength={300}
                                required={true}
                                placeholder="Логин"
                            />,
                            <input
                                key="2"
                                name="password"
                                type="password"
                                minLength={6}
                                required={true}
                                placeholder="Пароль"
                            />
                        ]}
                    />
                }
                buttonTitle="Войти"
                submitCallback={loginCallback}
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
                            <input
                                key="1"
                                name="username"
                                minLength={4}
                                maxLength={16}
                                required={true}
                                placeholder="Придумайте логин"
                            />,
                            <input
                                key="3"
                                name="password"
                                type="password"
                                minLength={6}
                                required={true}
                                placeholder="Придумайте пароль"
                            />
                        ]}
                    />
                }
                buttonTitle="Регистрация"
                submitCallback={registerCallback}
                tipCallback={() => setFormType("login")}
            />
        )
    }

}