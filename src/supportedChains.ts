
export type ChainInfo = {
  id: number;
  rpcUrl: string;
}

export const supportedChains: (ChainInfo & {networkIcon: string, uniFactory?: string, tokenUrl: string, name: string, addressUrl: string, txUrl: string, symbol: string, description: string, icon: string, wrappedNative?: string, uniUsdc?: string, uniPositionManager?: string, uniSwapRouter?: string})[] = [
  {
    id: 137,
    rpcUrl: `https://polygon-mainnet.infura.io/v3/c43772786f7a42ea878db7b8550513b4`,
    addressUrl: 'https://polygonscan.com/address',
    txUrl: 'https://polygonscan.com/tx',
    tokenUrl: 'https://polygonscan.com/token',
    symbol: 'MATIC',
    description: 'Polygon',
    icon: 'https://polygonscan.com/images/svg/brands/polygon.svg',
    networkIcon: 'https://polygonscan.com/images/svg/brands/polygon.svg',
    uniUsdc: '0x2791bca1f2de4661ed88a30c99a7a9449aa84174',
    wrappedNative: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270',
    uniPositionManager: '0xc36442b4a4522e871399cd717abdd847ab11fe88',
    uniSwapRouter: '0x68b3465833fb72a70ecdf485e0e4c7bd8665fc45',
    uniFactory: '0x1f98431c8ad98523631ae4a59f267346ea31f984',
    name: 'Polygon'
  },
  {
    id: 10,
    rpcUrl: `https://optimism-mainnet.infura.io/v3/c43772786f7a42ea878db7b8550513b4`,
    addressUrl: 'https://optimistic.etherscan.io/address',
    txUrl: 'https://optimistic.etherscan.io/tx',
    tokenUrl: 'https://optimistic.etherscan.io/token',
    symbol: 'ETH (Optimism L2)',
    description: 'Optimism',
    icon: 'https://app.uniswap.org/static/media/optimistic_ethereum.34412af2.svg',
    networkIcon: 'https://app.uniswap.org/static/media/optimistic_ethereum.34412af2.svg',
    uniUsdc: '0x7f5c764cbc14f9669b88837ca1490cca17c31607',
    wrappedNative: '0x4200000000000000000000000000000000000006',
    uniPositionManager: '0xc36442b4a4522e871399cd717abdd847ab11fe88',
    uniSwapRouter: '0x68b3465833fb72a70ecdf485e0e4c7bd8665fc45',
    uniFactory: '0x1f98431c8ad98523631ae4a59f267346ea31f984',
    name: 'Optimism'
  },
    {
    id: 1,
    rpcUrl: `https://mainnet.infura.io/v3/c43772786f7a42ea878db7b8550513b4`,
    addressUrl: 'https://etherscan.io/address',
    txUrl: 'https://etherscan.io/tx',
    tokenUrl: 'https://etherscan.io/token',
    symbol: 'ETH',
    description: 'Ethereum',
    icon: 'https://etherscan.io/images/svg/brands/ethereum-1.svg',
    networkIcon: 'https://etherscan.io/images/svg/brands/ethereum-1.svg',
    uniUsdc: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
    wrappedNative: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
    uniPositionManager: '0xc36442b4a4522e871399cd717abdd847ab11fe88',
    uniSwapRouter: '0x68b3465833fb72a70ecdf485e0e4c7bd8665fc45',
    uniFactory: '0x1f98431c8ad98523631ae4a59f267346ea31f984',
    name: 'Ethereum'
  },
  {
    id: 42161,
    rpcUrl: `https://arbitrum-mainnet.infura.io/v3/c43772786f7a42ea878db7b8550513b4`,
    addressUrl: 'https://arbiscan.io/address',
    txUrl: 'https://arbiscan.io/tx',
    tokenUrl: 'https://arbiscan.io/token',
    symbol: 'ETH (Arbitrum L2)',
    description: 'Arbitrum',
    icon: 'https://etherscan.io/images/svg/brands/ethereum-1.svg',
    networkIcon: 'https://arbitrum.io/wp-content/uploads/2022/12/One-Logo-280x280-1.png',
    uniUsdc: '0xff970a61a04b1ca14834a43f5de4533ebddb5cc8',
    wrappedNative: '0x82af49447d8a07e3bd95bd0d56f35241523fbab1',
    uniPositionManager: '0xc36442b4a4522e871399cd717abdd847ab11fe88',
    uniSwapRouter: '0x68b3465833fb72a70ecdf485e0e4c7bd8665fc45',
    uniFactory: '0x1f98431c8ad98523631ae4a59f267346ea31f984',
    name: 'Arbitrum'
  },
  {
    id: 5,
    rpcUrl: `https://goerli.infura.io/v3/c43772786f7a42ea878db7b8550513b4`,
    addressUrl: 'https://goerli.etherscan.io/address',
    txUrl: 'https://goerli.etherscan.io/tx',
    tokenUrl: 'https://goerli.etherscan.io/token',
    symbol: 'ETH',
    description: 'Goerli Testnet',
    icon: 'https://etherscan.io/images/svg/brands/ethereum-1.svg',
    networkIcon: 'https://etherscan.io/images/svg/brands/ethereum-1.svg',
    uniUsdc: '0x07865c6e87b9f70255377e024ace6630c1eaa37f',
    wrappedNative: '0xb4fbf271143f4fbf7b91a5ded31805e42b2208d6',
    uniPositionManager: '0xc36442b4a4522e871399cd717abdd847ab11fe88',
    uniSwapRouter: '0x68b3465833fb72a70ecdf485e0e4c7bd8665fc45',
    uniFactory: '0x1f98431c8ad98523631ae4a59f267346ea31f984',
    name: 'Goerli Testnet'
  },
  ]

  export const getChain = (chainId: number) => {
    const chain = supportedChains.find( (chain: any) => chain.id === chainId)
    if(!chain) throw new Error(`couldnt get chain ${chainId}`)
    return chain
  }

  export const supportsChain = (chainId: number) => {
    const chain = supportedChains.find( (chain: any) => chain.id === chainId)
    if(!chain) return false
    return true
  }

  
  export const API_BASE_URL = 'https://api.tokenlauncher.com'
  // export const API_BASE_URL = 'http://localhost:3000'
  
  export const APP_BASE_URL = 'https://app.tokenlauncher.com'
  // export const APP_BASE_URL = 'http://localhost:8080'
  