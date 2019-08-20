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

  /*function logSHIT(algo){
    console.log(algo)
  }*/

  function handleChange(event) {
    setUserInput(event.target.value);
  }

  function handleSubmit(event) {
    var buffer = geobuf.decode(new Pbf(userInput));
    console.log(buffer);
    let headers = {
      headers: {
        'Accept': "application/octet-stream"
      }
    }
    axios.get('http://ggt-des.ibge.gov.br/api/bcim/aldeias-indigenas/623', headers)
    .then(res => {
      console.log(res.data)
      let parsedRes = geobuf.decode(new Pbf(res.data))
      console.log(parsedRes)
    })
    event.preventDefault();
  }

  return (
    <div className="App">
      <header className="App-header">
        <p> Geobuf / GeoJson converter </p>
        <textarea className="text-input" onChange={handleChange}/>
        <input 
          type="submit" 
          value="convert !" 
          className="btn-input" 
          onClick={handleSubmit}
        />
      </header>
    </div>
  );
}

export default App;
