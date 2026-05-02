import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>AI Career Hub</title> {/* Ganti judul web */}
        <link rel="icon" href="/logo.png" /> {/* Ganti favicon */}
      </Head>
      <Component {...pageProps} />
    </>
  );
}
