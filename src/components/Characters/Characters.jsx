import { CardContent, Card, CircularProgress, Grid, Paper, Typography, CardHeader, Box, Chip, CardActions, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetIndividualCharacter } from "../../api/GetAllCharacters";
import { useNavigate } from "react-router-dom";

import Spinner from "../Spinner/Spinner";

const useStyles = makeStyles({
    background:{
      backgroundColor: "#1F2933",
      height: "100vh",
      width: "100vw"
    },
    cardContent:{
      backgroundColor: "#52606D",
      color: "#E4E7EB",
    },
    card:{
      backgroundColor: "#52606D",
    },
    paper:{
     
    },
    font:{
      color: "#E4E7EB",
    }
})


const Character = () => {
  const { id } = useParams();
    const classes = useStyles();
  const [character, setCharacter] = useState("");
  const navigate = useNavigate()

  useEffect(() => {
    GetIndividualCharacter(id).then((res) => setCharacter(res));
      
    return () => {
      setCharacter(null);
    };
  }, []);
  console.log(character)

  return (
    <>
    {!character ? <Spinner />:(
        <div  className={classes.background} >
           <Grid container  justifyContent="center" alignContent={"center"} style={{height: "100vh", width: "100vw"}}>
             <Grid item  xs={12} md={8} lg={6}>       
                  <Card>
                    <CardContent className={classes.card} >
                      <Typography gutterBottom variant="h5" className={classes.font} >I am: {character.name}</Typography>
                      <Typography variant="h6" className={classes.font} >My Id: {character.id}</Typography>
                      <Typography variant="h6" className={classes.font}>I was created: {Date(character.created)}</Typography> 
                     <Typography className={classes.font}>My current status: <Chip label={character.status} sx={{backgroundColor: "#ea8d60", padding:"5px", fontSize: "large", color: "#1e1008", fontWeight:"bold"}}  /> </Typography> 
                    </CardContent>
                    <CardActions className={classes.card}>
                      <Button><span className={classes.font}>Know more</span></Button>
                      <Button onClick={()=> navigate('/')}><span className={classes.font}>Back</span></Button>
                    </CardActions>
                  </Card>
             </Grid>

           </Grid>
        </div>
    ) }
    </>
  );
};

export default Character;
