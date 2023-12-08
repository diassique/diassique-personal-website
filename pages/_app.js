import Layout from '../components/layouts/main';
import Fonts from '../components/fonts';
import { AnimatePresence } from 'framer-motion';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../libs/theme';
import { useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';

function Website({ Component, pageProps, router }) {

  useEffect(() => {
    // This code will run only on the client side
    window.history.scrollRestoration = 'manual';

    return () => {
      // Optional: Resetting any settings when the component unmounts
    };
  }, []);

  useEffect(() => {
    const handleRouteChange = () => {
      window.scrollTo({ top: 0 });
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Layout router={router}>
        <AnimatePresence
          mode="wait"
          initial={true}
          onExitComplete={() => {}}
        >
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
        <Analytics />
      </Layout>
    </ChakraProvider>
  );
}

export default Website;
