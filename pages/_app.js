// import AppData from '@/components/AppData';
import LoadingBar from 'react-top-loading-bar';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
// import { Store } from '@/store/hooks';

import '@/styles/globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function App({ Component, pageProps }) {
  const [progress, setProgress] = useState(0);

  const router = useRouter();
  useEffect(() => {
    router.events.on('routeChangeStart', () => {
      setProgress(20);
    });
    router.events.on('routeChangeComplete', () => {
      setProgress(100);
    });
  }, [router.events]);

  if (router.pathname.includes('/admin')) {
    return (
      <>
        <LoadingBar
          color="#FFFFFF"
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
          height={2}
          shadow={true}
          background="transparent"
          waitingTime={400}
        />
        <Component {...pageProps} />
      </>
    );
  } else {
    return (
      <>
        <LoadingBar
          color="#FFFFFF"
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
          height={2}
          shadow={true}
          background="transparent"
          waitingTime={400}
        />
        <Header />
        <Component {...pageProps} />
        <Footer />
      </>
    );
  }
}
