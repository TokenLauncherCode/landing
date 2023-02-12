import { APP_BASE_URL, getChain } from '@/supportedChains';
import {
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

export function LatestLaunches(params: any) {

  const list = params?.data.slice(0, 6)

  return (

      <Container pt='0.5em' w='fit-content' >
        <Center pt='1em' pb='1em'>
          <Text textColor='gray.400' fontWeight='bold' fontSize={'2xl'}>Top Tokens by Liquidity</Text>
        </Center>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacingY={'1em'}>
              {list.map((listItem: any) => (
                <HStack key={listItem.address} p='0.5em'>
                  <VStack align={'start'} spacing={0}>
                  <Link fontWeight='bold' textColor = 'blue.400' style={{textDecoration: 'none'}} href={`${APP_BASE_URL}/token/${listItem.address}/${listItem.chainId}`} isExternal>
                    {listItem.name} ({listItem.symbol})
                  </Link>
                    <Text textColor='gray.400'>${listItem.liquidityData.tvlUsd}</Text>
                    <Text textColor='green.500'>${listItem.liquidityData.priceUsd} </Text>
                    <Text color={'gray.500'}>{getChain(listItem.chainId).name}</Text>
                  </VStack>
                </HStack>
              ))}
            </SimpleGrid>
          </Container>
  )
}