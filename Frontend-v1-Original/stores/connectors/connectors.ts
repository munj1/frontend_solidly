import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { WalletLinkConnector } from "@web3-react/walletlink-connector";
import { NetworkConnector } from "@web3-react/network-connector";

const POLLING_INTERVAL = 12000;
const RPC_URLS = {
  250: "https://rpc.ftm.tools",
  4002: "https://rpc.testnet.fantom.network",
  42161: `https://arb-mainnet.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_MAINNET_ARBITRUM_API_KEY}`,
  421613:
    "https://arb-goerli.g.alchemy.com/v2/DYui84snckNK6aQUTLWXRUBGvCuUw9nJ",
};

let obj: {
  [key: number]: string;
} = {
  42161: RPC_URLS[42161],
};

if (process.env.NEXT_PUBLIC_CHAINID === "421613") {
  obj = { 421613: RPC_URLS[421613] };
}

export const network = new NetworkConnector({ urls: obj });

export const injected = new InjectedConnector({
  supportedChainIds: [parseInt(process.env.NEXT_PUBLIC_CHAINID)],
});

export const walletconnect = new WalletConnectConnector({
  rpc: obj,
  chainId: parseInt(process.env.NEXT_PUBLIC_CHAINID),
  bridge: "https://bridge.walletconnect.org",
  qrcode: true,
});

export const walletlink = new WalletLinkConnector({
  url: RPC_URLS[process.env.NEXT_PUBLIC_CHAINID],
  appName: "Velocimeter",
  supportedChainIds: [parseInt(process.env.NEXT_PUBLIC_CHAINID)],
});
