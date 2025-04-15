import styles from "@/styles/components/chats.module.css";

import Plus from "@/favicons/svg/Plus.svg";
import Search from "@/favicons/svg/Search.svg";

export default function Chats() {
    interface ChatProps {
        username: string;
        lastMessage: string;
        timestamp: string;
    }

    function Chat({ username, lastMessage, timestamp } : ChatProps) {
        return (
            <div className={styles.chat}>
                <div className={styles.chatAvatarContainer}>
                    <div className={styles.chatAvatar} />
                </div>
                <div className={styles.chatInfo}>
                    <div className={styles.chatInfoTitle}>
                        <h3>{username}</h3>
                        <h4>{timestamp}</h4>
                    </div>
                    <h4>{lastMessage}</h4>
                </div>
            </div>
        )
    }

    function ChatCards() {
        const cards = [];

        // Тестовый цикл
        for (let i = 0; i < 10; i++) {
            cards.push(<Chat 
                username="Никнейм"
                timestamp="15:32"
                lastMessage="Привет как дела"
            />);
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
                <Search />
                <input placeholder="Поиск"/>
            </div>
            <div className={styles.chatsContainer}>
                <ChatCards />
            </div>
        </section>
    );
}
