import { getChain } from '@/supportedChains'
import { Box, Button, Center, Flex, HStack, Link, Text, VStack } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import type { ListChildComponentProps } from 'react-window'

export const RecentlyLaunchedRow: React.FC<typeof ListChildComponentProps> = ({ data, index, style }) => {
  const address= data.items[index].address
  const chainId = data.items[index].chainId

  const router = useRouter()
  return (
    <Link isExternal href={`https://app.tokenlauncher.com/token/${address}/${chainId}`}>
    <Button
      variant='ghost'
      justifyContent='space-between'
      style={style}
      _focus={{
        shadow: 'outline-inset',
      }}
    >
          <VStack w='100%'>
            <Center>
              <VStack>
           <Link
             lineHeight={1}
             textOverflow='ellipsis'
             whiteSpace='nowrap'
             overflow='hidden'
             textColor={'blue.400'}
             isExternal
             href={`${getChain(chainId).tokenUrl}/${address}`}
           >
            {data.items[index].name} ({data.items[index].symbol})
           </Link>
           <Text textColor={'gray.500'}>{`${getChain(chainId).name}`}</Text>
           </VStack>
           </Center>
           </VStack>
    </Button>
    </Link>
  )
}