interface BaseAsset {
  address: string;
  symbol: string;
  name: string;
  decimals: number;
  logoURI: string | null;
  local: boolean;
  balance: string | null;
  isWhitelisted?: boolean;
  listingFee?: string | number;
}

interface RouteAsset {
  price: number;
  nativeChainAddress: string; // if no,  set to :""
  nativeChainId: number;
  address: string;
  name: string;
  symbol: string;
  decimals: number;
  logoURI?: null | string;
}

interface Bribe {
  token: {
    price: number;
    nativeChainAddress: string; // if no,  set to :""
    nativeChainId: number;
    address: string;
    name: string;
    symbol: string;
    decimals: number;
    logoURI: null | string;
  };
  reward_ammount: number;
  rewardAmmount: number;
  earned?: string;
}

type BribeEarned = { earned: string };

interface PairFromAPI {
  tvl: number;
  apr: number;
  address: string;
  symbol: string;
  decimals: number;
  stable: boolean;
  total_supply: number;
  reserve0: number;
  reserve1: number;
  token0_address: string;
  token1_address: string;
  gauge_address: string; // if no,  set to :""
  isStable: boolean;
  totalSupply: number;
  token0: {
    price: number;
    nativeChainAddress: string; // if no,  set to :""
    nativeChainId: number;
    address: string;
    name: string;
    symbol: string;
    decimals: number;
    logoURI: null | string;
  };
  token1: {
    price: number;
    nativeChainAddress: string; // if no,  set to :""
    nativeChainId: number;
    address: string;
    name: string;
    symbol: string;
    decimals: number;
    logoURI: null | string;
  };
  rewardType?: string;
  claimable0?: string;
  claimable1?: string;
  gauge?: {
    // exists only if gauge_address is not empty
    decimals: number;
    tbv: number;
    votes: number;
    apr: number;
    address: string;
    total_supply: number;
    bribe_address: string;
    fees_address: string;
    wrapped_bribe_address: string;
    reward: number;
    bribeAddress: string;
    feesAddress: string;
    totalSupply: number;
    bribes: Bribe[];
    rewardsEarned?: string;
    bribesEarned?: Bribe[] | BribeEarned[];
  };
}

export type { BaseAsset, PairFromAPI, RouteAsset };
