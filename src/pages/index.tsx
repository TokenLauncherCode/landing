import {
  Box,
  Center,
  HStack,
  Text,
  VStack
} from '@chakra-ui/react';

import Head from 'next/head';
import LaunchInput from '@/components/LaunchInput';

export default function Home() {
  return (
    <>
      <Head>
        <title>Token Launcher</title>
        <meta name="description" content="Create erc20 tokens that are traded uniswap, farming programs with any APR, and airdrop on any evm chain. Free testnet launches" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="google-site-verification" content="mn1wCy3-7CBieV3wdh4msPmcH2I6W6F3TeSGVRj8x40" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box textColor='gray.400'>
        <Center>
          <LaunchInput />
        </Center>
      </Box>
    </>
  )
}
