import "../styles/globals.css";
//put global imports here
function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  //put global components here
  // return <Component {...pageProps} />;
  return getLayout(<Component {...pageProps} />);
}
export default MyApp;
