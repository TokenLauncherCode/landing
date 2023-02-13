import { APP_BASE_URL, getChain } from '@/supportedChains';
import {
  Box,
  Button,
  Center,
  Container,
  HStack,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VStack
} from '@chakra-ui/react';
import { IoSwapHorizontalSharp } from 'react-icons/io5';

export function LatestLaunches(params: any) {

  const list = params?.data.slice(0, 6)

  return (
      <Container pt='1.5em' maxW='2xl'>
        <Center>
          <Text textColor='gray.400' fontWeight='bold' fontSize={'2xl'}>Top Token Launches</Text>
        </Center>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacingX={'7em'} spacingY={'2em'} mt='1.0em'>
              {list.map((listItem: any, i: any) => (
                <VStack align='right' key={i} spacing='0'>
                  <Link fontWeight='bold' textColor = 'blue.400' href={`${APP_BASE_URL}/token/${listItem.address}/${listItem.chainId}`} isExternal>
                    {listItem.name}
                  </Link>
                    <Text textColor='green.500'> ${listItem.liquidityData.priceUsd}</Text>
                    <Link textColor='blue.400' href={`https://coinmarketcap.com/dexscan/${getChain(listItem.chainId).name}/${listItem.liquidityData.poolAddress}`} isExternal>{`CoinMarketCap`}</Link>
                    <HStack>
                    <Link textColor='blue.400' href={`https://dex.guru/token/${listItem.address}-polygon`} isExternal>{`Swap`}</Link>
                    </HStack>
                    <Text textColor={'gray.500'}>{getChain(listItem.chainId).name}</Text>
                </VStack>
              ))}
            </SimpleGrid>
            <Center mt='1.0em'>
              <Link fontWeight='bold' textColor='blue.400'>See All Tokens</Link>
            </Center>
          </Container>
  )
}