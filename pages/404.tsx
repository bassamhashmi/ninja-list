import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Head from "next/head";

export default function NotFound() {
  const router = useRouter();

  React.useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

  return (
    <div className="container">
      <Head>
        <title>Page Not Found</title>
        <meta
          name="description"
          content="The page you are trying to visit is not available."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="not-found main">
        <h1>Oooops</h1>
        <h2>That page can&apos;t be found</h2>

        <p>
          Go back to the{" "}
          <Link href="/">
            <a>Homepage</a>
          </Link>
        </p>
      </main>
    </div>
  );
}
