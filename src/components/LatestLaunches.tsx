import {
  Center,
  Stack,
  Text
} from '@chakra-ui/react';
import { FixedSizeList } from 'react-window';
import { RecentlyLaunchedRow } from './RecentlyLaunchedRow';

export function LatestLaunches(params: any) {
  return (
    <Stack borderColor={"gray.700"}>
      <Center>
        <Text fontWeight='bold' fontSize={'2xl'}>Latest Tokens</Text>
      </Center>

      <FixedSizeList
        itemSize={80}
        height={400}
        width='100%'
        itemData={{
          items: params?.data,
        }}
        itemCount={params?.data.length >= 10 ? 10 : 0}
      >
        {RecentlyLaunchedRow}
      </FixedSizeList>
    </Stack>
  )
}