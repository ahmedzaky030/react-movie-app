import React, { useEffect } from 'react';
import {
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Checkbox,
    ListItemText,
    Input,
    makeStyles,
    Slider    
  } from "@material-ui/core";
  import './filter.css'
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

  const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function valuetext(value) {
  return `${value}`;
}
export function Filter({genres , updateConfig , config}){
    
    const classes = useStyles();
    const [genreName, setGenreName] = React.useState([...genres]);

    const handleChange = (event) => {
      debugger;
      console.log(event.target.value);
      let s = [...event.target.value];
      let gernreIds = genres.filter(v => s.includes(v.name)).map(v => v.id);
      config[''] = gernreIds;
      updateConfig()
      console.log(gernreIds);
    };

    

    

    const [valueSlider, setValueSlider] = React.useState([1970, 2002]);

  const handleChangeSlider = (event, newValue) => {
    console.log(newValue);
    setValueSlider(newValue);
  };
    return (
      <div className="filter">
        <form>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput">Year of Release </label>
            <Slider
              value={valueSlider}
              onChange={handleChangeSlider}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              getAriaValueText={valuetext}
              defaultValue={1950}
              step={1}
              min={1950}
              max={2021}
            />
          </div>
          <div className="form-group">
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-mutiple-checkbox-label">Genre</InputLabel>
              <Select
                labelId="demo-mutiple-checkbox-label"
                id="demo-mutiple-checkbox"
                multiple
                value={genreName}
                onChange={handleChange}
                input={<Input />}
                renderValue={(selected) => selected.join(", ")}
                MenuProps={MenuProps}
                valuelabeldisplay="on"
              
                getAriaValueText={valuetext}
              >
                {genres.map((item) => (
                  <MenuItem key={item.id} value={item.name}>
                    <Checkbox checked={genreName.indexOf(item.name) > -1} />
                    <ListItemText primary={item.name} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </form>
      </div>
    );
}