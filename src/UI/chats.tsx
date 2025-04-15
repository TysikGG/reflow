import styles from "@/styles/components/chats.module.css";

import Plus from "@/favicons/svg/Plus.svg";

export default function Chats() {
    interface ChatProps {
        username: string;
        lastMessage: string;
        timestamp: string;
    }

    function Chat({ username, lastMessage, timestamp } : ChatProps) {
        return (
            <div className={styles.chat}>
                <span />
                <div className={styles.chatInfo}>
                    <div className={styles.chatInfoTitle}>
                        <h2>{username}</h2>
                        <h4>{timestamp}</h4>
                    </div>
                    <h3>{lastMessage}</h3>
                </div>
            </div>
        )
    }

    function ChatCards() {
        const cards = [];

        // Тестовый цикл
        for (let i = 0; i < 10; i++) {
            cards.push(<Chat username="Никнейм" timestamp="15:32" lastMessage="Привет как дела" />);
        }

        return cards;
    }

    return (
        <section className={styles.container}>
            <div className={styles.header}>
                <h1>Сообщения</h1>
                <button><Plus /></button>
            </div>
            <div className={styles.search}>
                <input type="text" />
            </div>
            <div className={styles.chatsContainer}>
                <ChatCards />
            </div>
        </section>
    );
}
