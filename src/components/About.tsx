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
    Link,
    IconButton,
    Flex,
    useColorModeValue,
    MenuButton,
    Menu,
    Avatar,
    MenuList,
    MenuItem,
    MenuDivider
  } from '@chakra-ui/react';
  import { CheckIcon } from '@chakra-ui/icons';

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
  
  export default function About() {
    return (
      <>
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
      </>
    )
  }
  