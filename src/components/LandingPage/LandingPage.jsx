import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import DragIndicatorRoundedIcon from "@mui/icons-material/DragIndicatorRounded";
import { useEffect, useState } from "react";
import { GetAllCharacters } from "../../api/GetAllCharacters";
import {useNavigate} from "react-router-dom";

const useStyles = makeStyles({
  topbar: {
    backgroundColor: "rgb(0,0,0)",
    color: "white",
  },
  cardContent:{
    '&: hover': {
      transform: "scale3d(1.05, 1.05, 1)"
    }
  },
  name:{
    fontSize: ""
  },
  background:{
    backgroundColor: "rgba(0,0,0,0.8)",
    '&: hover': {
      transform: "scale3d(1.05, 1.05, 1)"
    }
  },
  cardHovered: {
    transform: "scale3d(1.05, 1.05, 1)"
  },
  mainHeading:{
   backgroundImage: `url(${"https://rickandmortyapi.com/api/character/avatar/19.jpeg"})`,
   height: "70vh",
   backgroundSize: "cover",
   opacity: 0.5,
   backgroundPosition: "center"
  },
  standardPadding:{
    padding: "20px"
  }
});

export const LandingPage = () => {
  const classes = useStyles();
  const [allChars, setAllChars] = useState();
  const navigate = useNavigate()

  useEffect(() => {
    GetAllCharacters().then((result) => setAllChars(result));
  }, []);
  return (
    <>
      <div >

        <Grid container direction={"row"} className={classes.mainHeading} justifyContent="center" alignContent={"center"}  >
          <Grid item xs={10}>
            <Grid container justifyContent={"center"} alignContent="center" >
              <Grid item>
                <Typography fontFamily={"revert"}  variant="h1" fontWeight={800} >
                  Rick and Morty 
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid container spacing={2} justifyContent={"center"} className={classes.standardPadding}>
          {allChars?.map((char, ind) => {
            return (
             
                <Grid item key={ind}  >
                <CardActionArea onClick={()=> navigate(`/character/${char.id}`) } >
                  <Card variant={"elevation"} className={classes.cardContent}  >
                    <CardMedia
                      component={"img"}
                      height={"140"}
                      image={char.image}
                      alt="image"
                      style={{height:"40vh"}}
                    />
                    <CardContent >
                      <Typography variant={"h6"} fontWeight="lighter" fontFamily="revert" >
                        Name: {char.name}{" "}
                      </Typography>
                      <Typography variant={"subtitle2"}  >
                        Status: {char.status}{" "}
                      </Typography>
                      <Typography variant={"subtitle2"}  >
                        Species: {char.gender}{" "}
                      </Typography>
                    </CardContent>
                  </Card>
                </CardActionArea>
              </Grid>
          
            );
          })}
        </Grid>
      </div>
    </>
  );
};
