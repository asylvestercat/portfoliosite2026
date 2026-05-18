"use client";

import Laptop from "@/assets/laptop.svg";
import styles from "./Hero.module.css";

interface HeroProps {
  isHome?: boolean;
}

export default function Hero({ isHome }: HeroProps) {
    return (
        <section className={styles.hero}>
            <div className={styles.content}>
                {isHome ? (
                    <>
                        <h1 className={styles.heroTitle}>Hello, I&apos;m Anna</h1>
                        <p className={styles.heroSubtitle}>Frontend engineer with a designer&apos;s eye, building polished, scalable web experiences.</p>
                    </>
                ) : (
                    <Laptop />
                )}
            </div>
        </section>
    );
}