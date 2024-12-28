import "@/styles/globals.scss";
import Header from "@/components/Common/Header";
import Head from "next/head";
import { AnimatePresence } from "framer-motion";
import PlsDesktop from "@/components/Temp/PlsDesktop";
import Footer from "@/components/Common/Footer";

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
        <Footer />
      </div>
      <div className="mobile">
        <PlsDesktop />
      </div>
    </>
  );
}
