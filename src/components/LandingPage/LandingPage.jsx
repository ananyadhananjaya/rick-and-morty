import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  ImageList,
  ImageListItem,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import DragIndicatorRoundedIcon from "@mui/icons-material/DragIndicatorRounded";
import { useEffect, useState } from "react";
import { GetAllCharacters } from "../../api/GetAllCharacters";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  topbar: {
    backgroundColor: "rgb(0,0,0)",
    color: "white",
  },
  cardContent: {
    "&: hover": {
      transform: "scale3d(1.05, 1.05, 1)",
    },
  },
  name: {
    fontSize: "",
  },
  background: {
    backgroundColor: "#1F2933",
  },
  cardStyle: {
    borderRadius: "10px 20px",
  },
  mainHeading: {
    backgroundImage: `url(${"https://rickandmortyapi.com/api/character/avatar/19.jpeg"})`,
    height: "70vh",
    backgroundSize: "cover",
    opacity: 0.5,
    backgroundPosition: "center",
  },
  standardPadding: {
    padding: "20px",
  },
  style: {},
  imageCss: {
    borderRadius: "4px",
    "&:hover": {
      boxShadow: "10px 8px 40px 1px #3E4C59",
      transform: "translate(0, -1px)",
      cursor: "pointer",
    },
  },
});

export const LandingPage = () => {
  const classes = useStyles();
  const [allChars, setAllChars] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    GetAllCharacters().then((result) => setAllChars(result));
  }, []);
  return (
    <>
      <div className={classes.background}>
        <Grid
          container
          direction={"row"}
          className={classes.mainHeading}
          justifyContent="space-around"
          alignContent={"center"}
        >
          <Grid item xs={10}>
            <Grid container justifyContent={"center"} alignContent="center">
              <Grid item>
                <Typography fontFamily={"revert"} variant="h1" fontWeight={800}>
                  Rick and Morty
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          container
          spacing={6}
          justifyContent="center"
          className={classes.standardPadding}
        >
          {allChars?.map((item) => (
            <Grid item key={item.name}>
              <img
                src={`${item.image}`}
                alt={item.name}
                className={classes.imageCss}
                onClick={() => navigate(`/character/${item.id}`)}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
};
