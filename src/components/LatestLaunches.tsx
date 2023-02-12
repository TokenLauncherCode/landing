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
    <Stack borderColor={"gray.700"}>
      <Center>
        <Text textColor='gray.400' fontWeight='bold' fontSize={'2xl'}>Top Tokens by Liquidity</Text>
      </Center>

      <Container>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacingY={'2em'} pt='1em' >
              {list.map((listItem: any) => (
                <HStack key={listItem.address} align={'top'}>
                  <Link style={{textDecoration: 'none'}} href={`${APP_BASE_URL}/token/${listItem.address}/${listItem.chainId}`} isExternal>
                  <Button backgroundColor={'#00000000'} p='3em'>
                  <VStack align={'start'}>
                    <Text textColor={'blue.400'} fontWeight={600}>{listItem.name} ({listItem.symbol})</Text>
                    <Text textColor='gray.400'>${listItem.liquidityData.tvlUsd}</Text>
                    <Text textColor='green.500'>${listItem.liquidityData.priceUsd} </Text>
                    <Text color={'gray.500'}>{getChain(listItem.chainId).name}</Text>
                  </VStack>
                  </Button>
                  </Link>
                </HStack>
              ))}
            </SimpleGrid>
          </Container>
    </Stack>
  )
}