import "@/styles/globals.scss";
import Header from "@/components/Header";
import { AnimatePresence } from "framer-motion";
export default function App({ Component, pageProps, router }) {
  return (
    <>
      <Header />
      <AnimatePresence mode="wait">
        <Component key={router.route} {...pageProps} />
      </AnimatePresence>
    </>
  );
}
