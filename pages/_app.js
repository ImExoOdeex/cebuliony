import { ChakraProvider, CSSReset } from '@chakra-ui/react'
import '@fontsource/comfortaa/500.css'
import theme from '../components/theme'
import { AnimatePresence } from 'framer-motion'
import Layout from '../components/Layout'
import '../styles/globals.css'
import 'focus-visible/dist/focus-visible'
import "@fontsource/work-sans"

function App({ Component, pageProps, router }) {
  return (
    <ChakraProvider theme={theme}>
      <Layout router={router}>
        <AnimatePresence onExitComplete={() => window.scrollTo(0, 0)} exitBeforeEnter initial={true}>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
        <CSSReset />
      </Layout>
    </ChakraProvider>
  )
}
export default App