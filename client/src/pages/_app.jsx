import "@/styles/globals.scss";
import Header from "@/components/Header/Header";
export default function App({ Component, pageProps }) {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
    </div>
  );
}
