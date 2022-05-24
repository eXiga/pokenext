import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-gradient-to-r from-sky-500 to-indigo-500 w-screen h-screen">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
