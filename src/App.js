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

  const [userInput, setUserInput] = useState("")
  
  return (
    <div className="App">
      <header className="App-header">
        <p> Geobuf / GeoJson converter </p>
        <textarea className="text-input">
          Enter a GeoJson here!
        </textarea>
        <input type="submit" value="convert !" className="btn-input"/>
      </header>
    </div>
  );
}

export default App;
