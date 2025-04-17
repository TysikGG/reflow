import styles from "@/styles/components/main/view.module.css";
import MessageBlock from "./chat/MessageBlock";

export default function View() {

    function MessagesBlocks() {
        const blocks = [];

        // Тестовая функция, симулиция реального чата.

        blocks.push(<MessageBlock content={"123"} position={{ isLastInBlock: false, direction: "right" }} />)
        blocks.push(<MessageBlock content={"2543235423"} position={{ isLastInBlock: true, direction: "right" }} />)
        blocks.push(<MessageBlock content={"123"} position={{ isLastInBlock: false, direction: "left" }} theme="light" />)
        blocks.push(<MessageBlock content={"254323254323542325432354232543235423254323542325432354232543235423254323542325432354232543235423254323542325432354232543235423"} position={{ isLastInBlock: true, direction: "left", }} theme="light" />)
        blocks.push(<MessageBlock content={"Бла бла бла"} position={{ isLastInBlock: false, direction: "right" }} />)
        blocks.push(<MessageBlock content={"2543235423"} position={{ isLastInBlock: false, direction: "right" }} />)
        blocks.push(<MessageBlock content={"Бла бла бла"} position={{ isLastInBlock: false, direction: "right" }} />)
        blocks.push(<MessageBlock content={"2543235423"} position={{ isLastInBlock: false, direction: "right" }} />)
        blocks.push(<MessageBlock content={"Бла бла бла"} position={{ isLastInBlock: false, direction: "right" }} />)
        blocks.push(<MessageBlock content={"254323254323542325432354232543235423254254323254323542325432354232543235423254323542325432354232543235423254323542325432354232543235423254323542325432354232543235423323542325432354232543235423254323542325432354232543235423254323542325432354232543235423"} position={{ isLastInBlock: true, direction: "right" }} />)
        blocks.push(<MessageBlock content={"123"} position={{ isLastInBlock: false, direction: "left" }} theme="light" />)
        blocks.push(<MessageBlock content={"254323254323542325432354232543235423254254323254323542325432354232543235423254323542325432354232543235423254323542325432354232543235423254323542325432354232543235423323542325432354232543235423254323542325432354232543235423254323542325432354232543235423"} position={{ isLastInBlock: false, direction: "left", }} theme="light" />)
        blocks.push(<MessageBlock content={"254323254323542325432354232543235423254254323254323542325432354232543235423254323542325432354232543235423254323542325432354232543235423254323542325432354232543235423323542325432354232543235423254323542325432354232543235423254323542325432354232543235423"} position={{ isLastInBlock: true, direction: "left", }} theme="light" />)
        
        // ============================================

        return blocks;
    }

    return (
        <section className={styles.container}>
            <MessagesBlocks />
        </section>
    )
}