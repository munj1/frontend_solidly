import React, { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/router";
import { Button, Typography } from "@mui/material";
import { AddCircleOutline } from "@mui/icons-material";

import classes from "./ssBribes.module.css";

import BribeCard from "../ssBribeCard/ssBribeCard";

import stores from "../../stores";
import { ACTIONS } from "../../stores/constants/constants";

export default function ssBribes() {
  const [, updateState] = useState<undefined | {}>();
  const forceUpdate = useCallback(() => updateState({}), []);

  const [pairs, setPairs] = useState([]);

  useEffect(() => {
    const stableSwapUpdated = () => {
      const pairs = stores.stableSwapStore.getStore("pairs");
      const pairsWithBribes = pairs.filter((pair) => {
        return (
          pair &&
          pair.gauge != null &&
          pair.gauge.address &&
          pair.gauge.bribes &&
          pair.gauge.bribes.length > 0
        );
      });
      setPairs(pairsWithBribes);
      forceUpdate();
    };

    stableSwapUpdated();

    stores.emitter.on(ACTIONS.UPDATED, stableSwapUpdated);
    return () => {
      stores.emitter.removeListener(ACTIONS.UPDATED, stableSwapUpdated);
    };
  }, []);

  const router = useRouter();
  const onCreate = () => {
    router.push("/bribe/create");
  };

  return (
    <div className={classes.container}>
      <div className={classes.descriptionBox}>
        <Typography variant='h1'>Bribe</Typography>
        <Typography variant='body2'>
          Create a bribe to encourage others to vote for your selected
          pool&apos;s rewards distribution.
        </Typography>
      </div>
      <Button
        variant='contained'
        color='secondary'
        startIcon={<AddCircleOutline />}
        size='large'
        className={classes.buttonOverride}
        onClick={onCreate}
      >
        <Typography className={classes.actionButtonText}>
          Create bribe
        </Typography>
      </Button>
      {/* <div className={classes.bribesContainer}>
        {pairs &&
          pairs &&
          pairs.length > 0 &&
          pairs.map((pair) => {
            return pair.gauge.bribes.map((bribe) => {
              return (
                <BribeCard
                  key={pair.symbol + bribe.token.symbol}
                  pair={pair}
                  bribe={bribe}
                />
              );
            });
          })}
      </div> */}
    </div>
  );
}
