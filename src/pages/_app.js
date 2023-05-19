import GTagScript from "@/components/GTagScript";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <GTagScript />
    </>
  );
}
