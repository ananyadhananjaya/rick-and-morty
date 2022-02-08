import React from "react";
import { CircularProgress, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    centererd: {
      height: "100vh",
      width: "100vw",
    },
  });

const Spinner = () =>{
    const classes = useStyles()
    return(
        <Grid
      container
      justifyContent={"center"}
      alignItems={"center"}
      className={classes.centererd}
    >
      <Grid item>
        <CircularProgress />
      </Grid>
    </Grid>
    )
}

export default Spinner;