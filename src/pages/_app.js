import Theme from "../styles/theme";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* favicon */}
        <link rel="icon" href="/favicon.png" />

        {/* title */}
        <title>Finn Formica</title>

        {/* metadata */}
        <meta charSet="UTF-8" />
        <meta name="author" content="Finn Formica" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="keywords"
          content="personal portfolio, nextjs, web development, data science"
        />
        <meta
          name="description"
          content="Hi, I am an aspiring software engineer and data science masters student - welcome to my personal portfolio website!"
        />
        <meta name="robots" content="all" />
      </Head>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
