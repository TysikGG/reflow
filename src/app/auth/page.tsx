import AuthForm from "@/UI/auth/form";
import styles from "@/styles/app/auth/auth.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
        <AuthForm />
    </div>
  );
}
