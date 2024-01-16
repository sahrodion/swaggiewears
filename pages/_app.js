import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      {/* <Layout>
      </Layout> */}
        <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
