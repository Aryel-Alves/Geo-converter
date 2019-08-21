import React, { useState } from 'react';
import axios from "axios";
import geobuf from 'geobuf';
import Pbf from 'pbf';
import './App.css';

/*
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [125.6, 10.1]
    },
    "properties": {
      "name": "Dinagat Islands"
    }
  }
*/

function App() {

  const [userInput, setUserInput] = useState("")
  const [ parsedResponse, setParsedResponse ] = useState("")

  /*function logSHIT(algo){
    console.log(algo)
  }*/

  function handleChange(event) {
    setUserInput(event.target.value);
  }

  function handleSubmit(event) {

    let requestConfig = {
      responseType: 'arraybuffer',
      headers: {'Accept': 'application/octet-stream'}
    }

    axios.get(userInput, requestConfig)
    .then( response => {
      let geoJson = geobuf.decode(new Pbf(response.data))
      setParsedResponse(geoJson)
    })

    
    event.preventDefault();
  }

  return (
    <div className="App">
      <header className="App-header">
        <p> Geobuf / GeoJson converter </p>
      </header>
      <div>
        <label>
          GeoBuf Url:
          <input type="text" className="text-input" onChange={handleChange}/>
        </label>

        <input 
          type="submit" 
          value="convert !" 
          className="btn-input" 
          onClick={handleSubmit}
        />
      </div>
      <div id="response-container">
        <div className="parsed-container">
          GeoJson
          <div>{JSON.stringify(parsedResponse)}</div>
        </div>
      </div>
      
    </div>
  );
}

export default App;
