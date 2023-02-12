import SideBar from '@/components/SideBar';
import '@/styles/globals.css'
import { Box, ChakraProvider, extendTheme, Text } from '@chakra-ui/react'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {

  const theme = extendTheme({
    styles: {
      global: () => ({
        body: {
          bg: "#222230",
        },
      }),
    },
  });
  
  return (
    <ChakraProvider theme={theme}>
      {/* <SideBar> */}
        <Component {...pageProps} />
      {/* </SideBar> */}
    </ChakraProvider>)
}
