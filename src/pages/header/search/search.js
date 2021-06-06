import React from 'react';
import './search.css';
export function Search({updateConfig , config}){
    const textInput = React.useRef(null);
    const handleInput= ($event) => {
      config['title'] = $event.target.value;
      updateConfig({...config});
    }

    return(
        <div className="search">
          <form className="form-inline">
            <input ref={textInput} className="form-control w-75 d-inline-block" type="text" onKeyDown={handleInput} />
          </form>
        </div>
    )
}