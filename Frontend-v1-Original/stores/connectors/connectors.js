import { InjectedConnector } from '@web3-react/injected-connector'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'
import { WalletLinkConnector } from '@web3-react/walletlink-connector'
import { NetworkConnector } from '@web3-react/network-connector'

// TODO: Add your own RPC URLS & ARB and ARB_GOERLI NEXT_PUBLIC_CHAINID
const POLLING_INTERVAL = 12000
const RPC_URLS = {
  250: 'https://rpc.ftm.tools',
  4002: 'https://rpc.testnet.fantom.network',
  42161: `https://arb-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_MAINNET_ARBITRUM_API_KEY}`,
  421613: 'https://arb-goerli.g.alchemy.com/v2/DYui84snckNK6aQUTLWXRUBGvCuUw9nJ'
}

// let obj = {}
// if (process.env.NEXT_PUBLIC_CHAINID == 250) {
//   obj = { 250: RPC_URLS[250] }
// } else {
//   obj = { 4002: RPC_URLS[4002] }
// }

let obj = {}
// if (process.env.NEXT_PUBLIC_CHAINID == 421613) {
//   obj = { 421613: RPC_URLS[421613] }
// } else {
//   obj = { 4002: RPC_URLS[4002] }
// }

// else if statement

// change to case statement add arb & arb goerli + keep fantom & fantom testnet

let caseObj = {}

switch (process.env.NEXT_PUBLIC_CHAINID) {
  case 42161: //arb
    obj = { 42161: RPC_URLS[250] }
    break
  case 421613: // arb goerli
    obj = { 421613: RPC_URLS[421613] }
    break
  case 250: // fantom
    obj = { 250: RPC_URLS[250] }
    break
  case 4002: // fantom testnet
    obj = { 4002: RPC_URLS[4002] }
    break
  default:
    obj = { 250: RPC_URLS[250] }
}

export const network = new NetworkConnector({ urls: obj })

export const injected = new InjectedConnector({
  supportedChainIds: [parseInt(process.env.NEXT_PUBLIC_CHAINID)]
})

export const walletconnect = new WalletConnectConnector({
  rpc: {
    250: RPC_URLS[250],
    4002: RPC_URLS[4002],
    42161: RPC_URLS[42161],
    421613: RPC_URLS[421613]
  },
  chainId: parseInt(process.env.NEXT_PUBLIC_CHAINID),
  bridge: 'https://bridge.walletconnect.org',
  qrcode: true,
  pollingInterval: POLLING_INTERVAL
})

export const walletlink = new WalletLinkConnector({
  url: RPC_URLS[process.env.NEXT_PUBLIC_CHAINID],
  appName: 'Solidly',
  chainId: parseInt(process.env.NEXT_PUBLIC_CHAINID)
})
