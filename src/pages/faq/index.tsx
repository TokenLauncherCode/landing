import {
    Box,
    Container,
    SimpleGrid,
    Icon,
    Text,
    HStack,
    VStack,
  } from '@chakra-ui/react';
  import { CheckIcon, QuestionIcon, QuestionOutlineIcon } from '@chakra-ui/icons';

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
  
  export default function Faq() {
    return (
      <>
          <Box m='10' w={{ base: '20em', md: '40em', lg: '40em' }}>
          <Text textColor='white' fontWeight={'Bold'} fontSize='3xl'>Frequenty Asked Questions</Text>
                <HStack align={'top'}>
                  <VStack align={'start'}>

                    <Text pt='5' fontSize='2xl'>What is Token Launcher?</Text>
                    <Text color={'gray.500'}>
                      Token Launcher helps you launch Ethereum ERC20 Tokens on EVM-compatible blockchains, automatically list your token on major defi exchanges with a real trading price, airdrop to millions of addresses and create farming programs to incentive liquidity.
                    </Text>
                    <Text color={'gray.500'}>
                      100% FREE -- Only pay for for mainnet network gas fees.
                    </Text>

                    <Text pt='5' fontSize='2xl'>What blockchains are supported?</Text>
                    <Text color={'gray.500'}>
                      We fully support all uniswap compatible chains - Ethereum, Polygon, Optimism, Arbitrum, and Goerli Testnet.
                    </Text>
                    <Text color={'gray.500'}>
                      Soon you will be able to create tokens on ANY ethereum compatible blockchain including Binance Smart Chain (BSC) Avalanche (AVAX), Fantom (FTM), KAVA, Gnosis (XDAI), and many more. 
                    </Text>

                    <Text pt='5' fontSize='2xl'>What does the token launch process look like?</Text>
                    <Text color={'gray.500'}>
                      The launch process is automated and does not require any coding or smart contract knowledge. We automatically:
                    </Text>
                    <Text color={'gray.500'}>
                      1. Generate token smart contract code for your token
                    </Text>
                    <Text color={'gray.500'}>
                      2. Deploy your token on chain using the crypto wallet of your choice.
                    </Text>
                    <Text color={'gray.500'}>
                      3. Verify token solidity code on etherscan, polygonscan, etc.
                    </Text>
                    <Text color={'gray.500'}>
                      4. Enable trading on Uniswap by selecting a starting price and initial liquidity amount (Optional)
                    </Text>
                    <Text color={'gray.500'}>
                      5. Airdrop your token to millions of addresses for minimal gas fees using a merkle airdrop contract  (Coming Soon)
                    </Text>
                    <Text color={'gray.500'}>
                      6. Create a farming contract to reward your users for providing liquidity on uniswap (Coming Soon)
                    </Text>
                  </VStack>

                </HStack>
          </Box>
      </>
    )
  }
  