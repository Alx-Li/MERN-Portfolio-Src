import styles from "@/styles/Home.module.scss";
import Head from "next/head";
import dynamic from "next/dynamic";
const WipHero = dynamic(() => import("@/components/WipHero"), { ssr: false });

// import Layout from "@/components/Layout";

function Error({ statusCode }) {
  return (
    <p>
      {statusCode
        ? `An error ${statusCode} occurred on server`
        : "An error occurred on client"}
    </p>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
