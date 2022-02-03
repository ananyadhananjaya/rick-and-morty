import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import DragIndicatorRoundedIcon from "@mui/icons-material/DragIndicatorRounded";
import { useEffect, useState } from "react";
import { GetAllCharacters } from "../../api/GetAllCharacters";

export const LandingPage = () => {
  const [allChars, setAllChars] = useState();
  useEffect(() => {
    GetAllCharacters().then((result) => setAllChars(result));
  }, []);
  return (
    <>
      <Grid container direction={"row"}>
        <Grid item xs={1}>
          <Grid container justifyContent={"flex-start"}>
            <Grid item>
              <IconButton>
                <DragIndicatorRoundedIcon />
              </IconButton>
            </Grid>
          </Grid>{" "}
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
              {" "}
              <>
                <Card variant={"elevation"} sx={{ maxWidth: 200 }} >
                  <CardMedia
                    component={"img"}
                    height={"140"}
                    image={char.image}
                    alt="image"
                  />
                  <CardContent>
                    <Typography variant={"body1"} >Name: {char.name} </Typography>
                    <Typography variant={"subtitle2"} >Status: {char.status} </Typography>
                    <Typography variant={"subtitle2"} >Species: {char.species} </Typography>
                  </CardContent>
                </Card>
              </>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};
