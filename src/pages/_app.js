import Theme from "../styles/theme";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.png" />
        <title>Finn Formica</title>
      </Head>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
