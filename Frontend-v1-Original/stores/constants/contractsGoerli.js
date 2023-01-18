import abis from '../abis'
// import { FTM_ADDRESS } from './contracts'

export const GOV_TOKEN_ADDRESS = '0x84Ca387E7ede764A3284c67Ff8c68a305a9030a0'
export const GOV_TOKEN_NAME = 'Velo'
export const GOV_TOKEN_SYMBOL = 'VELO'
export const GOV_TOKEN_DECIMALS = 18
export const GOV_TOKEN_LOGO = 'https://prod.solidly.exchange/Solidly-O.svg'
export const GOV_TOKEN_ABI = abis.tokenABI

export const VE_TOKEN_ADDRESS = '0xBf05364D6cf1586852c18c6b1CbEe218E3e09885'
export const VE_TOKEN_NAME = 'veNFT'
export const VE_TOKEN_SYMBOL = 'veNFT'
export const VE_TOKEN_DECIMALS = 18
export const VE_TOKEN_LOGO = 'https://prod.solidly.exchange/Solidly-O.svg'
export const VE_TOKEN_ABI = abis.veTokenABI

export const WFTM_ADDRESS = '0xcda739d69067333974cd73a722ab92e5e0ad8a4f' // fake usdc on arb goerli
export const WFTM_NAME = 'WRAPPED ETH'
export const WFTM_SYMBOL = 'WETH'
export const WFTM_DECIMALS = 18
export const WFTM_ABI = abis.wftmABI

// there is something wrong with this Wrapped ETH its not working idk why

export const FTM_ADDRESS = 'FTM'
export const FTM_NAME = 'FANTOM'
export const FTM_SYMBOL = 'FTM'
export const FTM_DECIMALS = 18
export const FTM_LOGO =
  'https://assets.coingecko.com/coins/images/4001/large/Fantom.png'
// BaseV1Factory checked here: https://ftmscan.com/address/0x3fAaB499b519fdC5819e3D7ed0C26111904cbc28#code
export const FACTORY_ADDRESS = '0x6389e934d35fC9e066FAb549C8DBc9FddaC10e0D'
export const FACTORY_ABI = abis.factoryABI

export const ROUTER_ADDRESS = '0x1B0aC6bf6f35E638f6cce8D69C6074561273dc52'
export const ROUTER_ABI = abis.routerABI
// using rewards distributer here need to double check if correct
export const VE_DIST_ADDRESS = '0xc4b9295487B4C43C1929299076820D8f55BBf957'
export const VE_DIST_ABI = abis.veDistABI

export const VOTER_ADDRESS = '0x854086d39955d28317aE3856399312b8Edb1B473'
export const VOTER_ABI = abis.voterABI

export const ERC20_ABI = abis.erc20ABI
export const PAIR_ABI = abis.pairABI
export const GAUGE_ABI = abis.gaugeABI
export const BRIBE_ABI = abis.bribeABI
export const TOKEN_ABI = abis.tokenABI

export const MULTICALL_ADDRESS = '0xcA11bde05977b3631167028862bE2a173976CA11'
