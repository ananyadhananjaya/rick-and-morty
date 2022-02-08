import { CircularProgress, Grid, Paper, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetIndividualCharacter } from "../../api/GetAllCharacters";

import Spinner from "../Spinner/Spinner";

const useStyles = makeStyles({
    background:{
        backgroundColor: 'black',
        height: '100vh',
        width: '100vw'
    } 
})


const Character = () => {
  const { id } = useParams();
    const classes = useStyles();
  const [character, setCharacter] = useState("");
  useEffect(() => {
    GetIndividualCharacter(id).then((res) => setCharacter(res));
    return () => {
      setCharacter(null);
    };
  }, []);

  return (
    <>
    {!character ? <Spinner />:(
        <div   >
            <Paper elevation={24} >
                <Grid container>
                    <Grid item >
                        <Typography>{character.name}</Typography>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    ) }
    </>
  );
};

export default Character;
