import Head from "next/head";
import Link from "next/link";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <h1 className={styles.title}>
          Welcome to <a href="">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Project building in{" "}
          <code className={styles.code}>Next.js with TypeScript</code>
        </p>

        <div className={styles.grid}>
          <Link href="/about">
            <a className={styles.card}>
              <h2>About &rarr;</h2>
              <p>Find in-depth information about this app</p>
            </a>
          </Link>

          <Link href="/ninjas">
            <a className={styles.card}>
              <h2>Ninja Listing &rarr;</h2>
              <p>See Ninja Listing, the listing of this app</p>
            </a>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Home;
