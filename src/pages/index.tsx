import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  HStack,
  VStack,
  Button,
  Center,
  LinkBox,
  LinkOverlay,
  Link
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';
import Head from 'next/head';

// Replace test data with your own
const features = [
{
  id: 0,
  title: 'No Coding Required',
  text: 'Automatically generate solidity code and deploy your token on-chain.',
},
{
  id: 1,
  title: 'Tradeable on Uniswap',
  text: 'Your token is tradeable on Uniswap by default, Choose starting price & liquidity to be enable trading with thousands of other defi tokens.',
},
{
  id: 2,
  title: 'Free',
  text: 'Only pay the network fees (gas) to deploy your token.',
},
{
  id: 3,
  title: 'No Gas Testnet Deploys',
  text: 'We pay all gas fees for testnet launched. Easily build, deploy & test proof of concept tokens.',
},
{
  id: 4,
  title: 'Supports all EVM Chains',
  text: 'Deploy your token on any Ethereum / EVM compatible blockchain. Includes uniswap trading on Ethereum Mainnet (and testnet), Polygon, Arbitrum, Optimism',
},
{
  id: 5,
  title: 'Airdrops & Farming (Coming Soon)',
  text: 'Airdrop your token to millions of users and incentivize liquidity with farming rewards.',
},
]

const positionProps = {position: 'absolute', bottom: '2%', left:'2%'}

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
    <Box p={4} textColor='gray.400'>
      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
        <Heading fontSize={'3xl'}>Token Launcher</Heading>
        <Text color={'gray.500'} fontSize={'xl'}>
          Deploy Ethereum & EVM tokens in 60 seconds.
        </Text>
      </Stack>

      <Center mt='10'>
        <LinkBox w={'fit-content'} >
        <LinkOverlay isExternal href='https://app.tokenlauncher.com'>
          <Button colorScheme={'green'} fontSize='2xl' fontWeight={'bold'} p='3' size='lg'>Launch App</Button>
        </LinkOverlay>
        </LinkBox>
        </Center>

      <Container maxW={'6xl'} mt={10}>
        <SimpleGrid columns={{ base: 2, md: 2, lg: 3 }} spacing={10}>
          {features.map((feature) => (
            <HStack key={feature.id} align={'top'}>
              <Box color={'green.400'} px={2}>
                <Icon as={CheckIcon} />
              </Box>
              <VStack align={'start'}>
                <Text fontWeight={600}>{feature.title}</Text>
                <Text color={'gray.500'}>{feature.text}</Text>
              </VStack>
            </HStack>
          ))}
        </SimpleGrid>
      </Container>
      <Center mt='10' alignItems={'flex-start'}>
        <VStack>
      <Link isExternal href={'https://github.com/TokenLauncherCode'} textColor='blue.400'>GitHub</Link>
      <Link isExternal href={'mailto:support@tokenlauncher.com'} textColor='blue.400'>support@tokenlauncher.com</Link>
      </VStack>
      </Center>
    </Box>

    </>
  )
}
