import {
    Box,
    Container,
    SimpleGrid,
    Icon,
    Text,
    HStack,
    VStack,
    Center,
  } from '@chakra-ui/react';
  import { CheckIcon } from '@chakra-ui/icons';

  // Replace test data with your own
  const features = [
    {
      id: 0,
      title: 'No Coding Required',
      text: 'Automatically generate solidity code and deploy token',
    },
    {
      id: 1,
      title: 'Defi Trading',
      text: 'Automatically added to Uniswap at any starting price & liquidity amount ',
    },
    {
      id: 2,
      title: 'Free',
      text: 'Only pay the network fees (gas) to deploy your token.',
    },
    {
      id: 3,
      title: 'No Gas Testnet Deploys',
      text: 'We pay gas fees for all testnet deploys',
    },
    {
      id: 4,
      title: 'Supports all EVM Chains',
      text: 'Deploy on any Ethereum EVM compatible blockchain',
    },
    {
      id: 5,
      title: 'Airdrops & Farming',
      text: 'Airdrop your token & setup farming programs (coming soon)',
    },
  ]
  
  export default function About() {
    return (
        <Container pt='0.5em' w='fit-content'>
        <Center pt='1em' pb='1em'>
              <Text textColor='gray.400' fontWeight='bold' fontSize={'3xl'}>Features</Text>
        </Center>
            <SimpleGrid columns={{ base: 2, md: 2, lg: 3 }} spacingY='1em'>
              {features.map((feature) => (
                <HStack key={feature.id} align={'top'}>
                  <Box color={'green.400'}>
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
    )
  }
  