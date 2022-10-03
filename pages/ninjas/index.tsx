import Head from "next/head";
import Link from "next/link";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { NinjasDataType, NinjaDataType } from "../../types";
import styles from "../../styles/Ninjas.module.css";

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch(`${process.env.API_URL}`);
  const data: NinjasDataType = await response.json();

  return {
    props: { ninjas: data },
  };
};

export default function Ninjas({
  ninjas,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className="container">
      <Head>
        <title>Ninja Listing</title>
        <meta
          name="description"
          content="Ninja Listing developed by Bassam Hashmi"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <>
          <h1>Ninja Listing</h1>
          {ninjas.map((ninja: NinjaDataType) => {
            return (
              <div key={ninja.id}>
                <Link href={`/ninjas/${ninja.id}`}>
                  <a className={styles.single}>
                    <h3>{ninja.name}</h3>
                  </a>
                </Link>
              </div>
            );
          })}
        </>
      </main>
    </div>
  );
}
