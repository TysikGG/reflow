import styles from "@/styles/components/main.module.css";
import Info from "./main/info";
import View from "./main/view";
import Bottom from "./main/bottom";

export default function Main() {
    return (
        <main className={styles.container}>
            <Info />
            <View />
            <Bottom />
        </main>
    )
}