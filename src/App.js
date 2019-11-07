import React, { useState } from 'react';
//import logo from './logo.svg';
import './App.css';


//C Major: CEG; D Major: DFshA G Major: GBD A Major: ACshE
let Keys = [
  {
    id: 'white',
    key: "C",
    major: 'CEG'
  },
  {
    id: 'black1',
    key: "LCSH",
    major: 'ACshE'
  },
  {
    id: 'white',
    key: "D",
    major: 'D'
  },
  {
    id: 'black2',
    key: "LDSH",
    major: 'CEG'
  },
  {
    id: 'white',
    key: "E",
    major: 'CEG'
  },
  {
    id: 'white',
    key: "F",
    major: 'D'
  },
  {
    id: 'black3',
    key: "Fsh",
    major: 'D'
  },
  {
    id: 'white',
    key: "G",
    major: 'CEG'
  },
  {
    id: 'black4',
    key: "Gsh",
    major: 'D'
  },
  {
    id: 'white',
    key: "A",
    major: 'D'
  },
  {
    id: 'black5',
    key: "Ash",
    major: 'D'
  },
  {
    id: 'white',
    key: "B",
    major: 'D'
  },
  {
    id: 'white',
    key: "C",
    major: 'D'
  },
  {
    id: 'black6',
    key: "CCsh",
    major: 'D'
  },
  {
    id: 'white',
    key: "D",
    major: 'D'
  },
  {
    id: 'black7',
    key: "DDsh",
    major: 'D'
  },
  {
    id: 'white',
    key: "E",
    major: 'D'
  },
  {
    id: 'white',
    key: "F",
    major: 'D'
  },
  {
    id: 'black8',
    key: "FFsh",
    major: 'D'
  },
  {
    id: 'white',
    key: "G",
    major: 'D'
  },
  {
    id: 'black9',
    key: "GGsh",
    major: 'D'
  },
  {
    id: 'white',
    key: "A",
    major: 'D'
  },
  {
    id: 'black10',
    key: "AAsh",
    major: 'D'
  },
  {
    id: 'white',
    key: "B",
    major: 'D'
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
  const [note,setNote] = useState('');
  const [majorSelected,setMajor] = useState('');
  
  function CMajor() {
    setMajor('CEG');
    setTimeout(back, 2000);
  }

  function GMajor() {
    setMajor('GBD');
    setTimeout(back, 2000);
  }

  function back() {
    //setPressed(false);
    setMajor('');
    setNote('');
  }

  function handleKeyPress(event) {
    console.log(event.target.value);
    if(event.target.value !== '') {
      console.log('hi');
      setNote(event.key);
      setTimeout(back, 2000);
    }
  }
  console.log(note);
  return (
    <div>
      <div className="main">
        <div className="piano">
          <div className="keys">
            {data.map(d => { return <Key id={d.id} x={d.x} y={d.y} key={d.key} major={d.major} noteEntered={note.toUpperCase() === d.key} keyPressed={majorSelected.includes(d.key)}></Key> })}
          </div>
        </div>
        <div className="enterNote">
          <input type="text" onKeyUp={handleKeyPress} />
        </div>
        <div id="buttons">
          <button type="button" name="button" id="c" onClick={CMajor}>C Major</button>
          <button type="button" name="button" id="g" onClick={GMajor}>G Major</button>
        </div>
      </div>
    </div>
  );
  
}


function Key({ id, keyPressed, major,noteEntered }) {
  return <div id={id} major={major} className={(keyPressed ? "pressed" : "") + " "+(noteEntered ? 'note':"")}></div>

}

export default App;
