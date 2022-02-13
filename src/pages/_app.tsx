import type { AppProps } from "next/app";
import type { ReactElement } from "react";
import "@styles/tailwind.css";
import "@styles/globals.css";
import "@styles/tailwindUtils.css";

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return <Component {...pageProps} />;
}

export default MyApp;
