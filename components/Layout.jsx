import React from 'react';
import Head from 'next/head';
import Header from './Header';
import { useCallback } from 'react';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';
import particleConfig from '../particle-config.json';
import Footer from './Home/Footer';

function Layout({ children, title }) {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    // await console.log(container);
  }, []);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="A platform where traders and investors are enthroned" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="ADAM BROKER" />
        <meta
          property="og:image"
          content="https://fcbmanila.com/wp-content/uploads/2015/08/21_asia-breweryasia-brewery.png"
        />
        <meta
          property="og:url"
          content="https://adambroker.vercel.app/"
        />
        <link rel="icon" href="/ablogo.png" />
      </Head>
      <div className="bg-priBG overflow-hidden">
        <Particles
          id="tsparticles"
          options={particleConfig}
          init={particlesInit}
          loaded={particlesLoaded}
          style={{ position: 'absolute', top: 0, left: 0, zIndex: 1 }}
        />
        <Header />
        <main className="pb-12">{children}</main>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
