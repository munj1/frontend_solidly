import React, { Component } from "react";
import { withStyles } from "@mui/styles";

import Snackbar from "./snackbar.jsx";

import { ACTIONS } from "../../stores/constants";

import stores from "../../stores";
const emitter = stores.emitter;

const styles = (theme) => ({
  root: {},
});

const SnackbarController = (props) => {
  const [state, setState] = React.useState({
    open: false,
    snackbarType: null,
    snackbarMessage: null,
  });

  React.useEffect(() => {
    emitter.on(ACTIONS.ERROR, showError);
    emitter.on(ACTIONS.TX_SUBMITTED, showHash);

    return () => {
      emitter.removeListener(ACTIONS.ERROR, showError);
      emitter.removeListener(ACTIONS.TX_SUBMITTED, showHash);
    };
  }, []);

  const showError = (error) => {
    const snackbarObj = {
      snackbarMessage: null,
      snackbarType: null,
      open: false,
    };
    setState(snackbarObj);

    setTimeout(() => {
      const snackbarObj = {
        snackbarMessage: error.toString(),
        snackbarType: "Error",
        open: true,
      };
      setState(snackbarObj);
    });
  };

  const showHash = ({ txHash }) => {
    const snackbarObj = {
      snackbarMessage: null,
      snackbarType: null,
      open: false,
    };
    setState(snackbarObj);

    setTimeout(() => {
      const snackbarObj = {
        snackbarMessage: txHash,
        snackbarType: "Hash",
        open: true,
      };
      setState(snackbarObj);
    });
  };

  const { snackbarType, snackbarMessage, open } = state;

  return (
    <>
      {open ? (
        <Snackbar type={snackbarType} message={snackbarMessage} open={true} />
      ) : (
        <div />
      )}
    </>
  );
};

class Legacy_SnackbarController extends Component {
  constructor(props) {
    super();

    this.state = {
      open: false,
      snackbarType: null,
      snackbarMessage: null,
    };
  }

  componentWillMount() {
    emitter.on(ACTIONS.ERROR, this.showError);
    // emitter.on(ACTIONS.TX_SUBMITTED, this.showHash);
  }

  componentWillUnmount() {
    emitter.removeListener(ACTIONS.ERROR, this.showError);
    // emitter.removeListener(ACTIONS.TX_SUBMITTED, this.showHash);
  }

  showError = (error) => {
    const snackbarObj = {
      snackbarMessage: null,
      snackbarType: null,
      open: false,
    };
    this.setState(snackbarObj);

    const that = this;
    setTimeout(() => {
      const snackbarObj = {
        snackbarMessage: error.toString(),
        snackbarType: "Error",
        open: true,
      };
      that.setState(snackbarObj);
    });
  };

  showHash = ({ txHash }) => {
    const snackbarObj = {
      snackbarMessage: null,
      snackbarType: null,
      open: false,
    };
    this.setState(snackbarObj);

    const that = this;
    setTimeout(() => {
      const snackbarObj = {
        snackbarMessage: txHash,
        snackbarType: "Hash",
        open: true,
      };
      that.setState(snackbarObj);
    });
  };

  render() {
    const { snackbarType, snackbarMessage, open } = this.state;

    if (open) {
      return (
        <Snackbar type={snackbarType} message={snackbarMessage} open={true} />
      );
    } else {
      return <div></div>;
    }
  }
}

export default withStyles(styles)(SnackbarController);
