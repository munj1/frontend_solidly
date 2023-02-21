import { useState, useEffect } from "react";
import { Typography, Button, Paper, SvgIcon } from "@mui/material";

import CReferral from "../../components/referral";
import Unlock from "../../components/unlock";

import stores from "../../stores";
import { ACTIONS } from "../../stores/constants";

import classes from "./referral.module.css";

function Referral() {
  const accountStore = stores.accountStore.getStore("account");
  const [account, setAccount] = useState(accountStore);
  const [unlockOpen, setUnlockOpen] = useState(false);

  useEffect(() => {
    const accountConfigure = () => {
      const accountStore = stores.accountStore.getStore("account");
      setAccount(accountStore);
      closeUnlock();
    };
    const connectWallet = () => {
      onAddressClicked();
    };

    stores.emitter.on(ACTIONS.ACCOUNT_CONFIGURED, accountConfigure);
    stores.emitter.on(ACTIONS.CONNECT_WALLET, connectWallet);
    return () => {
      stores.emitter.removeListener(
        ACTIONS.ACCOUNT_CONFIGURED,
        accountConfigure
      );
      stores.emitter.removeListener(ACTIONS.CONNECT_WALLET, connectWallet);
    };
  }, []);

  const onAddressClicked = () => {
    setUnlockOpen(true);
  };

  const closeUnlock = () => {
    setUnlockOpen(false);
  };

  return (
    <div className={classes.ffContainer}>
      {account && account.address ? (
        <div className={classes.connected}>
          <CReferral />
        </div>
      ) : (
        <Paper className={classes.notConnectedContent}>
          <Typography className={classes.mainHeadingNC} variant="h1">
            Referral
          </Typography>
          <Typography className={classes.mainDescNC} variant="body2">
            Refer your friends to earn.
          </Typography>
          <Button
            disableElevation
            className={classes.buttonConnect}
            variant="contained"
            onClick={onAddressClicked}
          >
            {account && account.address && (
              <div
                className={`${classes.accountIcon} ${classes.metamask}`}
              ></div>
            )}
            <Typography>Connect Wallet to Continue</Typography>
          </Button>
        </Paper>
      )}
      {unlockOpen && <Unlock modalOpen={unlockOpen} closeModal={closeUnlock} />}
    </div>
  );
}

export default Referral;
