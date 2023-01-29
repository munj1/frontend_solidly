import React, { useState, useEffect, useCallback } from "react";
import { Typography } from "@mui/material";

import classes from "./ssVests.module.css";

import VestsTable from "./ssVestsTable.js";

import stores from "../../stores";
import { ACTIONS } from "../../stores/constants";

export default function ssVests() {
  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);

  const [vestNFTs, setVestNFTs] = useState([]);
  const [govToken, setGovToken] = useState(null);
  const [veToken, setVeToken] = useState(null);

  useEffect(() => {
    const ssUpdated = async () => {
      setGovToken(stores.stableSwapStore.getStore("govToken"));
      setVeToken(stores.stableSwapStore.getStore("veToken"));
    };

    ssUpdated();

    stores.emitter.on(ACTIONS.UPDATED, ssUpdated);
    return () => {
      stores.emitter.removeListener(ACTIONS.UPDATED, ssUpdated);
    };
  }, []);

  useEffect(() => {
    const vestNFTsReturned = (nfts) => {
      setVestNFTs(nfts);
      forceUpdate();
    };

    window.setTimeout(() => {
      stores.dispatcher.dispatch({ type: ACTIONS.GET_VEST_NFTS, content: {} });
    }, 1);

    stores.emitter.on(ACTIONS.VEST_NFTS_RETURNED, vestNFTsReturned);
    return () => {
      stores.emitter.removeListener(
        ACTIONS.VEST_NFTS_RETURNED,
        vestNFTsReturned
      );
    };
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.descriptionBox}>
        <Typography variant='h1'>Vest</Typography>
        <Typography variant='body2'>
          Lock FLOW into veFLOW to earn and govern. Vote with veFLOW to earn
          bribes and trading fees. veFLOW can be transferred, merged and split.
          You can hold multiple positions.
        </Typography>
      </div>
      <VestsTable vestNFTs={vestNFTs} govToken={govToken} veToken={veToken} />
    </div>
  );
}
