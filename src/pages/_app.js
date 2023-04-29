import '@/styles/globals.css';
import Layout from '../../components/Layout';




export default function App({ Component, pageProps }) {
  console.log(pageProps)
  
  return (
    <>
      <Layout title='AdamBroker'>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
