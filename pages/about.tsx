import Head from "next/head";
// import styles from "../styles/Home.module.css";

export default function About() {
  return (
    <div className="container">
      <Head>
        <title>About</title>
        <meta
          name="description"
          content="This app is developed by Bassam Hashmi"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <h1>About Page</h1>
      </main>
    </div>
  );
}
