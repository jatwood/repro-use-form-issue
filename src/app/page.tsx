import Image from "next/image";
import styles from "./page.module.css";
import test from "./formAction";
import SubmissionStateError from "./SubmissionStateError";
import SubmissionStateCorrect from "./SubmissionStateCorrect";

export default function Home() {
  return (
    <main className={styles.main}>
      <form action={test}>
        <section style={{ marginBottom: "8px" }}>
          <h3>Correct state</h3>
          <SubmissionStateCorrect />
        </section>
        <section style={{ marginBottom: "8px" }}>
          <h3>Incorrect state</h3>
          <SubmissionStateError />
        </section>
        <p>
          On submission the form action will await for 10 seconds before
          completing
        </p>
        <button type="submit">test submission</button>
      </form>
    </main>
  );
}
