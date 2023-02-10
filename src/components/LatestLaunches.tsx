import {
  Center,
  Stack,
  Text
  } from '@chakra-ui/react';
import { FixedSizeList } from 'react-window';
import { RecentlyLaunchedRow } from './RecentlyLaunchedRow';
import AutoSizer from 'react-virtualized-auto-sizer'
import { useRef, useState } from 'react';

export function LatestLaunches(params: any) {
    const [autoHeight, setAutoHeight] = useState(0)
    const [autoHeight2, setAutoHeight2] = useState(0)
  
    return (
      <Stack borderColor={"gray.700"}>
                  <Center>
            <Text fontWeight='bold' fontSize={'2xl'}>Latest Tokens</Text>
            <AutoSizer disableWidth>
          {
            ({height}: {height: any}) => {
              if(autoHeight2 === 0)
              setAutoHeight2(height)
            }
  }
        </AutoSizer>
          </Center>

        <FixedSizeList
                itemSize={80}
                height={autoHeight}
                width='100%'
                itemData={{
                  items: params?.data,
                }}
                itemCount={params?.data.length >= 10 ? 10 : 0}
              >
                {RecentlyLaunchedRow}
              </FixedSizeList>
        <AutoSizer disableWidth>
          {
            ({height}: {height: any}) => {
              if(autoHeight === 0 && autoHeight2 !== 0)
              setAutoHeight(height - autoHeight2)
            }
  }
        </AutoSizer>
      </Stack>
    )
}