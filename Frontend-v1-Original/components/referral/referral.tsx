import { useState, useEffect, useCallback } from "react";
import Script from "next/script";

import classes from "./referral.module.css";

import stores from "../../stores";
import { ACTIONS } from "../../stores/constants/constants";

export default function Referral() {
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

  return (
    <>
      <Script
        src="//cdn.jsdelivr.net/npm/amplifi.js@0.8.10/amplifi.min.js"
        strategy="afterInteractive"
      />
      <div className={classes.container}></div>;
    </>
  );
}
