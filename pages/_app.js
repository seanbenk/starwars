import { useState } from "react";
import "../styles/globals.scss";
import AppContext from "../context/AppContext";

import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  const [context, setContext] = useState({ favourites: [] });

  return (
    <AppContext.Provider value={[context, setContext]}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppContext.Provider>
  );
}

export default MyApp;
