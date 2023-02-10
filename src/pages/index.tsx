import {
  Box,
  Center,
  SimpleGrid,
} from '@chakra-ui/react';

import Head from 'next/head';
import LaunchInput from '@/components/LaunchInput';
import { LatestLaunches } from '@/components/LatestLaunches';
import axios from 'axios';
import { API_BASE_URL } from '@/supportedChains';

export default function Home(props: any) {
  return (
    <>
      <Head>
        <title>Token Launcher</title>
        <meta name="description" content="Create erc20 tokens that are traded uniswap, farming programs with any APR, and airdrop on any evm chain. Free testnet launches" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="google-site-verification" content="mn1wCy3-7CBieV3wdh4msPmcH2I6W6F3TeSGVRj8x40" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Center mt='2'>
      <Box textColor='gray.400' w='fit-content'>
          <SimpleGrid columns={{ base: 1, md: 1, lg: 2 }} spacingX='40' spacingY='10'>
            <LaunchInput />
            <LatestLaunches data={props?.newData ?? []}/>
          </SimpleGrid>
      </Box>
      </Center>
    </>
  )
}

export async function getStaticProps() {
  try {
    const { data } = await axios.get(`${API_BASE_URL}/token_info_internal`, {
      params: {
        chainId: 5,
      }
    })

    const newData = Object.values(data?.info ?? {}).map((item: any) => {

      return {
        name: item.name,
        symbol: item.symbol,
        address: item.address,
        chainId: item.chainId
      }
    })

    return {
      props: { newData },
    };
  } catch (error) {
    console.error(error);
  }
}