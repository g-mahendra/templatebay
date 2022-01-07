import "../styles/globals.css";
import { Header } from "../components/ComponentProvider";
import React from "react";

function MyApp({ Component, pageProps }) {
  return (
    <div className="w-screen min-h-screen bg-gray-100">
      <Header />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
