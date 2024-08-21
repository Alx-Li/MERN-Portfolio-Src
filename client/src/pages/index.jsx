import styles from "@/styles/Home.module.scss";
import Head from "next/head";
import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
export default function Home() {
  return (
    <>
      <Head>
        <title>Alx Li | Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>
        <main className={styles.main}>
          <Hero text={"catchphrase//"} logo />
        </main>
      </Layout>
    </>
  );
}
