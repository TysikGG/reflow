import styles from "@/styles/components/panel.module.css";

import Chat from "@/favicons/svg/Chat.svg";
import Options from "@/favicons/svg/Options.svg";

export default function Panel() {
    return (
        <div className={styles.container}>
            <section>
                <Chat />
                <Options />
            </section>
        </div>
    );
}
