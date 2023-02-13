import {
  Box,
  SimpleGrid,
} from '@chakra-ui/react';

import Head from 'next/head';
import LaunchInput from '@/components/LaunchInput';
import { LatestLaunches } from '@/components/LatestLaunches';
import axios from 'axios';
import { API_BASE_URL, supportedChains } from '@/supportedChains';
import About from '@/components/About';
import { useEffect } from 'react';
import SideBar from '@/components/SideBar';

export default function Home(props: any) {

  useEffect( () => {
    window.localStorage.setItem('chakra-ui-color-mode', 'dark')
  }, [])

  return (
    <>
      <Head>
        <title>Token Launcher</title>
        <meta name="description" content="Create erc20 tokens that are traded uniswap, farming programs with any APR, and airdrop on any evm chain. Free testnet launches" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="google-site-verification" content="mn1wCy3-7CBieV3wdh4msPmcH2I6W6F3TeSGVRj8x40" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SimpleGrid columns={{ base: 1, md: 1, lg: 1, xl: 2 }}>        
      <LaunchInput />
      <Box>
        <About/>
        <LatestLaunches data={props?.newData ?? []} />
      </Box>

      </SimpleGrid> 
      </>
  )
}

// this can be slow becasue it calls endpoint for each token but its ok because only called on build
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
          chainId: item.chainId,
          decimals: item.decimals
        }
      }).filter( (item) => item.chainId !== 5)
      
      allNewData = allNewData.concat(newData)
    }

    const liquidityData = [] as any
    for(let i=0;i<allNewData.length;i++) {
      const { data: d } = await axios.get(`${API_BASE_URL}/token_liquidity`, {
        params: {
          chainId: allNewData[i].chainId,
          address: allNewData[i].address,
          decimals: allNewData[i].decimals,
        }
      })
      liquidityData[i]=d.liquidity
    }

    const dataSorted = allNewData.map( (data: any, i: number) => ({
      ...data,
      liquidityData: liquidityData[i]
    })).sort( (a: any, b: any) => {
      return parseFloat(b.liquidityData.tvlUsd) - parseFloat(a.liquidityData.tvlUsd)
    })

    return {
      props: { newData: dataSorted },
    };
  } catch (error) {
    console.error(error);
  }
}