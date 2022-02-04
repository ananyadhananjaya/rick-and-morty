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
      <div className={classes.topbar}>
        <Grid container direction={"row"}>
          <Grid item xs={1}>
            <Grid container justifyContent={"flex-start"}>
              <Grid item>
                <IconButton>
                  <DragIndicatorRoundedIcon color={"warning"} />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={10}>
            <Grid container justifyContent={"center"}>
              <Grid item>
                <Typography variant="h5">
                  Welcome to Rick and Morty Fandom
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container spacing={2} justifyContent={"center"}>
          {allChars?.map((char) => {
            return (
              <Grid item>
                <CardActionArea onClick={()=> navigate(`/character/${char.id}`) } >
                  <Card variant={"elevation"} sx={{ maxWidth: 200 }}>
                    <CardMedia
                      component={"img"}
                      height={"140"}
                      image={char.image}
                      alt="image"
                    />
                    <CardContent>
                      <Typography variant={"body1"}>
                        Name: {char.name}{" "}
                      </Typography>
                      <Typography variant={"subtitle2"}>
                        Status: {char.status}{" "}
                      </Typography>
                      <Typography variant={"subtitle2"}>
                        Species: {char.species}{" "}
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
