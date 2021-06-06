import React from "react";

import {
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormLabel,
  makeStyles
} from "@material-ui/core";
import './sort.css';
import { red } from '@material-ui/core/colors'; 
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

export function Sort({updateConfig, config}) {
  const classes = useStyles();
  const [valueSortBy, setValueSortBy] = React.useState("original_title");

  const handleChangeSortBy = (event) => {
    setValueSortBy(event.target.value);
    let sortProperty = `${event.target.value}.${valueSortDir}`;
    config.sort_by= sortProperty;
    updateConfig(config);
  };

  const [valueSortDir, setValueSortDir] = React.useState("asc");

  const handleChangeSortDir = (event) => {
    setValueSortDir(event.target.value);
    let sortProperty = `${valueSortBy}.${event.target.value}`;
    config.sort_by= sortProperty;
    updateConfig(config);
  };
  return (
    <div className="sort">
      <FormControl component="fieldset">
        <FormLabel component="legend">Sort By</FormLabel>
        <RadioGroup
          aria-label="sortBy"
          name="sortBy"
          value={valueSortBy}
          onChange={handleChangeSortBy}
        >
          <FormControlLabel value="original_title" control={<Radio />} label="Name" />
          <FormControlLabel value="release_date" control={<Radio />} label="Year of release" />
        </RadioGroup>
      </FormControl>
      <FormControl component="fieldset">
        <FormLabel component="legend">Sort Direction</FormLabel>
        <RadioGroup
          aria-label="sortDirection"
          name="sortDirection"
          value={valueSortDir}
          onChange={handleChangeSortDir}
        >
          <FormControlLabel value="asc" control={<Radio />} label="Asc" />
          <FormControlLabel value="desc" control={<Radio />} label="Desc" />
        </RadioGroup>
      </FormControl>
    </div>
  );
}
