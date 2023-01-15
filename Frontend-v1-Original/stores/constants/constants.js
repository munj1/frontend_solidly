import BigNumber from 'bignumber.js'
import * as contractsTestnet from './contractsTestnet'
import * as contracts from './contracts'
// import * as contracts from './contracts'
import * as actions from './actions'

let isTestnet = process.env.NEXT_PUBLIC_CHAINID == 421613
// change this to make it work with arbitrum & goerli as well
// URLS
let scan = 'https://ftmscan.com/'
let cont = contracts

if (isTestnet) {
  // scan = 'https://testnet.ftmscan.com/'
  scan = 'https://goerli.arbiscan.io/'
  // cont = contractsTestnet
  cont = contracts
}

console.log('we are on this chain:', cont)

export const ETHERSCAN_URL = scan

export const CONTRACTS = cont
export const ACTIONS = actions

export const MAX_UINT256 = new BigNumber(2).pow(256).minus(1).toFixed(0)
export const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000'
