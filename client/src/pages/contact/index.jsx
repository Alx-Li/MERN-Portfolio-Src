import styles from "@/styles/Home.module.scss";
import Head from "next/head";
import Hero from "@/components/Hero";
import Layout from "@/components/Layout";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Alx Li | Contact</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <main className={styles.main}>
          <Hero text={"work.in.progress//"} />
        </main>
      </Layout>
    </>
  );
}
