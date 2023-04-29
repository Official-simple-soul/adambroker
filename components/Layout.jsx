import React from 'react';
import Head from 'next/head';
import Header from './Header';
import { useCallback } from 'react';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';
import particleConfig from '../particle-config.json';

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
          content="https://sherifdeen-portfolio.vercel.app/"
        />
        <link rel="icon" href="/A.png" />
      </Head>
      <div className="bg-priBG overflow-auto">
        <Particles
          id="tsparticles"
          options={particleConfig}
          init={particlesInit}
          loaded={particlesLoaded}
          style={{ position: 'absolute', top: 0, left: 0, zIndex: 1 }}
        />
        <Header />
        <main className="overflow-h-auto h-[100vh]">{children}</main>
      </div>
    </>
  );
}

export default Layout;
