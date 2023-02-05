import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gridTemplateRows: "1fr 1fr",
            gap: "0px 0px",
            justifyContent: "center",
            alignContent: "center",
            justifyItems: "center",
            alignItems: "center",
            height: "100%",
            width: "100%",
          }}
        >
          <h2> Imagine some really neat graphic and presentation here!</h2>

          <Link
            href="/play"
            style={{
              padding: "10px",
              background: "green",
              fontSize: "35px",
              color: "white",
              borderRadius: "30%",
            }}
          >
            Play
          </Link>
        </div>
      </main>
    </>
  );
}