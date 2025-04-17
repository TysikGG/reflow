import styles from "@/styles/components/panel.module.css";

import Chat from "@/favicons/svg/Chat.svg";
import Options from "@/favicons/svg/Options.svg";

export default function Panel() {
    return (
        <header className={styles.container}>
            <section>
                <Chat />
                <Options />
            </section>
        </header>
    );
}
