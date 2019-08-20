import React, { useState } from 'react';
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

  const [userInput, setUserInput] = useState("a")

  function logSHIT(algo){
    console.log(algo)
  }

  return (
    <div className="App">
      <header className="App-header">
        <p> Geobuf / GeoJson converter </p>
        <textarea className="text-input" onChange={setUserInput}>
          Enter a GeoJson here!
        </textarea>
        <input type="submit" value="convert !" className="btn-input"/>
        <button onClick={() => logSHIT(userInput)}>
          Click me
        </button>
      </header>
    </div>
  );
}

export default App;
