'use client';

import { FormEventHandler, MouseEventHandler, ReactNode, useState } from "react";

import styles from "@/styles/app/auth/auth.module.css";
import Key from "@/favicons/svg/Key.svg";
import loginCallback from "@/libs/components/auth/loginCallback";
import registerCallback from "@/libs/components/auth/registerCallback";
import debounce from "@/libs/scripts/debounce";
import checkUsername from "@/libs/API/users/CheckUsername";

interface BaseAuthFormProps {
    title: string,
    tip: string,
    inputs: ReactNode,
    buttonTitle: string,
    buttonDisabled?: boolean,
    secondary?: boolean,
    secondaryTitle?: string,
    secondaryButtonTitle?: ReactNode,
    submitCallback?: FormEventHandler,
    tipCallback?: MouseEventHandler,
    secondaryCallback?: MouseEventHandler
};

export default function AuthForm() {
    const [formType, setFormType] = useState<String>("login");

    function BaseAuthForm({
        title,
        tip,
        inputs,
        buttonTitle,
        buttonDisabled = false,
        secondary,
        secondaryTitle,
        secondaryButtonTitle,
        submitCallback,
        tipCallback,
        secondaryCallback
    }: BaseAuthFormProps) {
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
                        <button disabled={buttonDisabled}>{buttonTitle}</button>
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

    function RegisterForm() {
        const [usernameCheckState, setUsernameCheckState] = useState("hidden");

        function checkUsernameCallback() {
            const value = (document.getElementById("register-username-input") as HTMLInputElement)?.value;
            if (!value) return;

            checkUsername(value).then((res) => {
                console.log(res.data);
                if (res.data.available === false) setUsernameCheckState("not_available")
                else if (res.data.available === true) setUsernameCheckState("available");
            })
        }

        let usernameDebounce = debounce(checkUsernameCallback, 1500);

        return (
            <BaseAuthForm
                title="Регистрация"
                tip="У меня уже есть аккаунт"
                inputs={
                    <AuthFormInputsConstructor
                        children={[
                            <>
                                <div
                                    style={{ display: usernameCheckState === "hidden" ? "none" : "block" }}
                                    className={styles.checkUsernameTitle}
                                >
                                    <h6 style={{ display: usernameCheckState === "available" ? "block" : "none" }}>
                                        Имя пользователя свободно
                                    </h6>
                                    <h6 style={{
                                        display: usernameCheckState === "not_available" ? "block" : "none",
                                        color: "var(--accent-error)"
                                    }}>
                                        Имя занято!
                                    </h6>
                                    <h6 style={{ display: usernameCheckState === "pending" ? "block" : "none" }}>
                                        Проверка доступности...
                                    </h6>
                                </div>
                                <input
                                    key="1"
                                    name="username"
                                    minLength={4}
                                    maxLength={16}
                                    required={true}
                                    placeholder="Придумайте логин"
                                    id="register-username-input"
                                    onInput={(e) => {
                                        if (!(e.target as HTMLInputElement).value) setUsernameCheckState("hidden")
                                        else setUsernameCheckState("pending");
                                        usernameDebounce();
                                    }}
                                    style={{
                                        borderColor: usernameCheckState === "not_available" ? "var(--accent-error)" : "",
                                        backgroundColor: usernameCheckState === "not_available" ? "var(--accent-error-30)" : "",
                                        marginTop: 0
                                    }}
                                    className={usernameCheckState === "not_available" ? "error-selection" : ""}
                                />
                            </>,
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
                buttonDisabled={usernameCheckState === "not_available"}
                submitCallback={registerCallback}
                tipCallback={() => setFormType("login")}
            />
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
        return <RegisterForm />
    }
}