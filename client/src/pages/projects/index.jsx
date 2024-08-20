import styles from "@/styles/Home.module.scss";
import Head from "next/head";
import WipHero from "@/components/WipHero";
import Layout from "@/components/Layout";

export default function Projects() {
  return (
    <>
      <Head>
        <title>Alx Li | Projects</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <main className={styles.main}>
          <WipHero text={"work.in.progress//"} />
        </main>
      </Layout>
    </>
  );
}
