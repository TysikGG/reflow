"use client"
import styles from "@/styles/app/auth/auth.module.css";

import Key from "@/favicons/svg/Key.svg";

export default function AuthForm() {
    return (
        <div className={styles.container}>
            <section className={styles.loginContainer}>
                <form className={styles.loginForm}>
                    <div className={styles.loginTitleContainer}>
                        <h1>Авторизация</h1>
                        <h3>У меня нету аккаунта</h3>
                    </div>
                    <div className={styles.inputsContainer}>
                        <input name="username" placeholder="Логин" />
                        <input name="password" type="password" placeholder="Пароль" />
                    </div>
                    <h3>ИЛИ</h3>
                    <button className={styles.buttonSecondary}>
                        <Key />
                        Войти по ключу
                    </button>
                    <button>Войти</button>
                </form>
            </section>
        </div>
    )
}