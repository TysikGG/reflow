import styles from "@/styles/components/main/info.module.css";

export default function Info() {
    return (
        <section className={styles.container}>
            <div className={styles.info}>
                <div className={styles.avatarContainer}>
                    <div className={styles.avatar}/>
                </div>
                <div className={styles.chatInfo}>
                    <h2>Никнейм</h2>
                    <h3>В сети</h3>
                </div>
            </div>
        </section>
    )
}