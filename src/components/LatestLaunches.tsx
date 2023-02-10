import {
  Center,
  Stack,
  Text
} from '@chakra-ui/react';
import { FixedSizeList } from 'react-window';
import { RecentlyLaunchedRow } from './RecentlyLaunchedRow';

export function LatestLaunches(params: any) {

  const list = params?.data.slice(0, 5)

  return (
    <Stack borderColor={"gray.700"}>
      <Center>
        <Text fontWeight='bold' fontSize={'2xl'}>Latest Token Launches</Text>
      </Center>

      <FixedSizeList
        itemSize={80}
        height={400}
        itemData={{
          items: list,
        }}
        itemCount={list.length}
      >
        {RecentlyLaunchedRow}
      </FixedSizeList>
    </Stack>
  )
}