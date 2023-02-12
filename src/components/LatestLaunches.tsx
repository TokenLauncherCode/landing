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
        <Text bgGradient='linear(to-l, #33CC80, #7928FF)' bgClip='text' fontWeight='bold' fontSize={'3xl'}>Latest Token Launches</Text>
      </Center>

      <Container>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={'2em'} >
              {list.map((listItem: any) => (
                <HStack key={listItem.address} align={'top'}>
                  <Link style={{textDecoration: 'none'}} href={`${APP_BASE_URL}/token/${listItem.address}/${listItem.chainId}`} isExternal>
                  <Button backgroundColor={'#00000000'} p='2em'>
                  <VStack align={'start'}>
                    <Link textColor={'blue.400'} fontWeight={600}>{listItem.name} ({listItem.symbol})</Link>
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