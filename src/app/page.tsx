import Hero from "@/components/Hero/Hero";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
        <Hero isHome />
        <section className={styles.content}>
            <h2>Featured Work</h2>
            <p>Content coming soon.</p>
        </section>
    </>
  );
}