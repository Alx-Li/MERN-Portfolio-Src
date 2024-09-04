import "@/styles/globals.scss";
import Header from "@/components/Header";
import Head from "next/head";
import { AnimatePresence } from "framer-motion";
import PlsDesktop from "@/components/Temp/PlsDesktop";

export default function App({ Component, pageProps, router }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <div className="desktop">
        <Header />
        <AnimatePresence mode="wait">
          <Component key={router.route} {...pageProps} />
        </AnimatePresence>
      </div>
      <div className="mobile">
        <PlsDesktop />
      </div>
    </>
  );
}
