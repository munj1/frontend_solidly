import { Paper } from "@mui/material";
import Setup from "./setup";
import classes from "./ssSwap.module.css";

function Swap() {
  return (
    <div className={classes.newSwapContainer}>
      <Paper elevation={0} className={classes.swapContainer}>
        <Setup />
      </Paper>
    </div>
  );
}

export default Swap;
