import {
  Box,
  Center,
  Divider,
  SimpleGrid,
  Text,
  VStack
} from '@chakra-ui/react';

import Head from 'next/head';
import LaunchInput from '@/components/LaunchInput';
import { LatestLaunches } from '@/components/LatestLaunches';
import axios from 'axios';
import { API_BASE_URL, supportedChains } from '@/supportedChains';
import About from '@/components/About';

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
      <Box textColor='gray.400' w='80%'>
        <SimpleGrid columns={{ base: 1, md: 1, lg: 2 }}>

        <VStack w='100%'>
          <Box w='fit-content' alignSelf={'center'}>
            <LaunchInput />
          </Box>
        </VStack>          
          <VStack w='100%'>
          <Box w='fit-content' alignSelf={'center'}>
            <LatestLaunches data={props?.newData ?? []} />
          </Box>
          </VStack>
        </SimpleGrid>
        <Divider p='5'/>
        <About />

      </Box>
    </>
  )
}

export async function getStaticProps() {
  try {

    const datas = []

    for(let i=0;i<supportedChains.length;i++) {
      const { data: d } = await axios.get(`${API_BASE_URL}/token_info_internal`, {
        params: {
          chainId: supportedChains[i].id,
        }
      })
      datas.push(d)
  
    }

    let allNewData = [] as any

    for(let i=0;i<datas.length;i++){
      const newData = Object.values(datas[i]?.info ?? {}).map((item: any) => {

        return {
          name: item.name,
          symbol: item.symbol,
          address: item.address,
          chainId: item.chainId
        }
      }).filter( (item) => item.chainId !== 5)
      
      allNewData = allNewData.concat(newData)
    }

    return {
      props: { newData: allNewData },
    };
  } catch (error) {
    console.error(error);
  }
}