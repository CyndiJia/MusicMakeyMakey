import React, { useState } from 'react';
//import logo from './logo.svg';
import './App.css';

let Keys = [
  {
    id: 'white',
    key: "C",
    major: 'CEG',
    state: 'pressed'
  },
  {
    id: 'black1',
    key: "Csh",
    major: 'CEG',
    state: ''
  },
  {
    id: 'white',
    key: "D",
    major: 'D',
    state: ''
  },
  {
    id: 'black2',
    key: "Dsh",
    major: 'CEG',
    state: ''
  },
  {
    id: 'white',
    key: "E",
    major: 'CEG',
    state: 'pressed'
  },
  {
    id: 'white',
    key: "F",
    major: 'D',
    state: ""
  },
  {
    id: 'black3',
    key: "Fsh",
    major: 'D',
    state: ""
  },
  {
    id: 'white',
    key: "G",
    major: 'CEG',
    state: "pressed"
  },
  {
    id: 'black4',
    key: "Gsh",
    major: 'D',
    state: ""
  },
  {
    id: 'white',
    key: "A",
    major: 'D',
    state: ""
  },
  {
    id: 'black5',
    key: "Ash",
    major: 'D',
    state: ""
  },
  {
    id: 'white',
    key: "B",
    major: 'D',
    state: ""
  },
  {
    id: 'white',
    key: "CC",
    major: 'D',
    state: ""
  },
  {
    id: 'black6',
    key: "CCsh",
    major: 'D',
    state: ""
  },
  {
    id: 'white',
    key: "DD",
    major: 'D',
    state: ""
  },
  {
    id: 'black7',
    key: "DDsh",
    major: 'D',
    state: ""
  },
  {
    id: 'white',
    key: "EE",
    major: 'D',
    state: ""
  },
  {
    id: 'white',
    key: "FF",
    major: 'D',
    state: ""
  },
  {
    id: 'black8',
    key: "FFsh",
    major: 'D',
    state: ""
  },
  {
    id: 'white',
    key: "GG",
    major: 'D',
    state: ""
  },
  {
    id: 'black9',
    key: "GGsh",
    major: 'D',
    state: ""
  },
  {
    id: 'white',
    key: "AA",
    major: 'D',
    state: ""
  },
  {
    id: 'black10',
    key: "AAsh",
    major: 'D',
    state: ""
  },
  {
    id: 'white',
    key: "BB",
    major: 'D',
    state: ""
  }
]

function App() {
  return (
    <div className="App">
      <Keyboard data={Keys} />
    </div>
  );
}

function Keyboard({ data }) {
  const [buttonPressed, setPressed] = useState(false);//initial value of useState; Value that changes the use state
  const [note,setNote] = useState(false);
  
  function CMajor() {
    for (let i = 0; i < data.length; i++) {
      console.log(data[i].major);
      if (data[i].major === 'CEG') {
        setPressed(true);
        setTimeout(back, 2000);
      }
    }
  }

  function GMajor() {
    for (let i = 0; i < data.length; i++) {
      console.log(data[i].major);
      if (data[i].major === 'D') {
        setPressed(true);
        setTimeout(back, 2000);
      }
    }
  }

  console.log(buttonPressed);
  function back() {
    setPressed(false);
  }

  function handleKeyPress(event) {
    if(event.key === 'c') {
      console.log('hi');
      setNote(true);
      setTimeout(back, 2000);
    }
  }
  console.log(note);
  return (
    <div>
      <div className="main">
        <div className="piano">
          <div className="keys">
            {data.map(d => { return <Key id={d.id} x={d.x} y={d.y} key={d.key} major={d.major} noteEntered = {note} keyPressed={buttonPressed && d.state}></Key> })};
          </div>
        </div>
        <div className="enterNote">
          <input type="text" onKeyPress={handleKeyPress} />
        </div>
        <div id="buttons">
          <button type="button" name="button" id="c" onClick={CMajor}>C Major</button>
          <button type="button" name="button" id="c" onClick={GMajor}>G Major</button>
        </div>
      </div>
    </div>
  );
  
}

function Key({ id, keyPressed, key, major }) {
  return <div id={id} major={major} className={keyPressed ? "pressed" : ""}></div>

}

export default App;
