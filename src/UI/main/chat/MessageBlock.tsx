import styles from "@/styles/components/main/chat/messageBlock.module.css";

interface MessageBlockProps {
    content: string,
    position: {
        isLastInBlock: boolean,
        direction: string
    },
    theme?: string
}

export default function MessageBlock({ content, position, theme = "default" }: MessageBlockProps) {
    let border = {};

    if (position.isLastInBlock && position.direction === "right") border = { borderBottomRightRadius: 0 }
    else if (position.isLastInBlock && position.direction === "left") border = { borderBottomLeftRadius: 0 };

    return (
        <section className={[styles?.[position.direction], styles.container].join(" ")}>
            <div className={styles.avatarContainer}>
                <div
                    className={styles.avatar}
                    style={{
                        display: position.isLastInBlock ? "block" : "none"
                    }} />
            </div>
            <div
                className={[styles.message, styles?.[`${theme}MessageTheme`]].join(" ")}
                style={border}
            >
                <h4>{content}</h4>
            </div>
        </section>
    )
}