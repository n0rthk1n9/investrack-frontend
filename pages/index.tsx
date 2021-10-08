import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>InvesTrack</title>
        <meta
          name="description"
          content="Something amazing is about to happen here 🚀"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to InvesTrack</h1>

        <p className={styles.description}>
          Stay tuned for something amazing to happen here! 🚀
        </p>
      </main>
    </div>
  );
};

export default Home;
