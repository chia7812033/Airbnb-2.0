import "../styles/globals.css";
import "mapbox-gl/dist/mapbox-gl.css";

import NextNProgress from "nextjs-progressbar";
import Router from "next/router";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNProgress options={{ easing: "ease", speed: 500 }} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
