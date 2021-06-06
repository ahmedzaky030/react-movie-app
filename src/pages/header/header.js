import React from "react";
import "./header.css";

import { Search } from "./search/search";
import { Filter } from "./filter/filter";
import { Sort } from "./sort/sort";





export default function Header({genres, updateConfig , config}) {
 
  //const theme = useTheme();

  return (
    <div className="header">
      <Search updateConfig={updateConfig} config={config}/>
      <Filter genres={genres} updateConfig={ updateConfig }  config={config}/>
      <Sort updateConfig={ updateConfig } config={config} />
    </div>
  );
}
