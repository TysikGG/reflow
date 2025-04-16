"use client"
import styles from "@/styles/components/main/bottom.module.css";

import Plus from "@/favicons/svg/Plus.svg";
import { ChangeEvent, useRef, useState } from "react";

export default function Bottom() {
    const [value, setValue] = useState<string>('');
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const fieldRef = useRef<HTMLDivElement>(null);

    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setValue(e.target.value);

        if (textareaRef.current && fieldRef.current) {
            textareaRef.current.style.height = '25px';

            const newHeight = Math.min(textareaRef.current.scrollHeight, 200);

            textareaRef.current.style.height = `${newHeight}px`;
            fieldRef.current.style.height = `${newHeight}px`;
        }
    };

    return (
        <section className={styles.container}>
            <div className={styles.field} ref={fieldRef}>
                <label htmlFor="file-upload" className={styles.filesInputContainer}>
                    <Plus />
                    <input id="file-upload" type="file" className={styles.filesInputContainerInput} />
                </label>
                <textarea
                    ref={textareaRef}
                    value={value}
                    onChange={handleChange}
                    placeholder="Сообщение @tysik"
                />
            </div>
        </section>
    );
}