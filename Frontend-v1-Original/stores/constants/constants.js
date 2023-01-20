import BigNumber from "bignumber.js";
import * as contractsTestnet from "./contractsGoerli";
import * as contracts from "./contracts";
import * as actions from "./actions";

let isTestnet = process.env.NEXT_PUBLIC_CHAINID == 421613;
// change this to make it work with arbitrum & goerli as well
// URLS
let scan = "https://arbiscan.io/";
let cont = contracts;

if (isTestnet) {
  scan = "https://goerli.arbiscan.io/";
  cont = contractsTestnet;
}

export const ETHERSCAN_URL = scan;

export const CONTRACTS = cont;
export const ACTIONS = actions;

export const MAX_UINT256 = new BigNumber(2).pow(256).minus(1).toFixed(0);
export const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";
