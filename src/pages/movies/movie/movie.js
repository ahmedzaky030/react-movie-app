import React from 'react';
import "./movie.css";

import {makeStyles} from '@material-ui/core'
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Chip from '@material-ui/core/Chip';
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      maxWidth: 300,
    },
    chips: {
      display: "flex",
      flexWrap: "wrap",
    },
    chip: {
      margin: 2,
    },
    noLabel: {
      marginTop: theme.spacing(3),
    },
    root: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: "56.25%", // 16:9
    },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: "rotate(180deg)",
    },
    avatar: {
      backgroundColor: red[500],
    },
  }));


export function MovieItem({movie , addToFavourite , removeFavourite}){
    const classes = useStyles();
    const [isFavourite , setMovieFavourite] = React.useState(movie.isFavourite);
    const handleFavourite = (id) => {
      movie.isFavourite ? removeFavourite(id) : addToFavourite(id);
      setMovieFavourite(!isFavourite);
    }
    return (
        <div className="movie-item">
          <Card className={classes.root}>
            <CardHeader
              avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                  R
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={movie.title}
              subheader={new Date(movie.release_date).toDateString()}
            />
            <CardMedia
              className={classes.media}
              image={ `https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              title={movie.title}
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                {movie.overview.slice(0 ,200)}
              </Typography>
              { movie.genres.map(v => <Chip key={v} className={classes.chip} color="primary" variant="outlined" size="small" label={v} /> )}
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites" onClick={() => handleFavourite(movie.id)}>
                <FavoriteIcon color={ isFavourite ? 'secondary' : 'inherit'} />
              </IconButton>
              
              
            </CardActions>
           </Card>
        </div>
    )
}