import React, { useState } from 'react';
//import logo from './logo.svg';
import './App.css';
import MIDISounds from 'midi-sounds-react';


let Keys = [
  {
    id: 'white',
    key: "C",
    major: 'CEG',
    midinum: '48'
  },
  {
    id: 'black1',
    key: "LCSH",
    major: 'ACshE',
    midinum: '49'
  },
  {
    id: 'white',
    key: "D",
    major: 'D',
    midinum: '50'
  },
  {
    id: 'black2',
    key: "LDSH",
    major: 'CEG',
    midinum: '51'
  },
  {
    id: 'white',
    key: "E",
    major: 'CEG',
    midinum: '52'
  },
  {
    id: 'white',
    key: "F",
    major: 'D',
    midinum: '53'
  },
  {
    id: 'black3',
    key: "Fsh",
    major: 'D',
    midinum: '54'
  },
  {
    id: 'white',
    key: "G",
    major: 'CEG',
    midinum: '55'
  },
  {
    id: 'black4',
    key: "Gsh",
    major: 'D',
    midinum: '56'
  },
  {
    id: 'white',
    key: "A",
    major: 'D',
    midinum: '57'
  },
  {
    id: 'black5',
    key: "Ash",
    major: 'D',
    midinum: '58'
  },
  {
    id: 'white',
    key: "B",
    major: 'D',
    midinum: '59'
  },
  {
    id: 'white',
    key: "C",
    major: 'D',
    midinum: '60'
  },
  {
    id: 'black6',
    key: "CCsh",
    major: 'D',
    midinum: '61'
  },
  {
    id: 'white',
    key: "D",
    major: 'D',
    midinum: '62'
  },
  {
    id: 'black7',
    key: "DDsh",
    major: 'D',
    midinum: '63'
  },
  {
    id: 'white',
    key: "E",
    major: 'D',
    midinum: '64'
  },
  {
    id: 'white',
    key: "F",
    major: 'D',
    midinum: '65'
  },
  {
    id: 'black8',
    key: "FFsh",
    major: 'D',
    midinum: '66'
  },
  {
    id: 'white',
    key: "G",
    major: 'D',
    midinum: '67'
  },
  {
    id: 'black9',
    key: "GGsh",
    major: 'D',
    midinum: '68'
  },
  {
    id: 'white',
    key: "A",
    major: 'D',
    midinum: '69'
  },
  {
    id: 'black10',
    key: "AAsh",
    major: 'D',
    midinum: '70'
  },
  {
    id: 'white',
    key: "B",
    major: 'D',
    midinum: '71'
  }
]

function App() {
  const [midiSounds,setMidi] = useState();
  function playTestInstrument(){
    // midiSounds.playChordNow(3, [60], 2.5);
  } 
  return (
    <div className="App">
      <Keyboard data={Keys} setMidi={setMidi} midiSounds={midiSounds}/>
      {/* <p><button onClick={playTestInstrument}>Play</button></p> */}
      <MIDISounds ref={setMidi} appElementName="root" instruments={[1]} />	
    </div>
  );
  }

function Keyboard({ data,setMidi,midiSounds }) {
  const pairs = {"c":60,"d":62,"e":64,"f":65,"g":67,"a":69,"b":71};

  const [note,setNote] = useState('');
  const [majorSelected,setMajor] = useState('');
  // const [midiSounds,setMidi]=useState();
  // <MIDISounds ref={setMidi} instruments={[1]} />
  
  
  function CMajor() {
    setMajor('CEG');
    setTimeout(back, 2000);
    midiSounds.playChordNow(3, [pairs.c], 2.5);
    midiSounds.playChordNow(3, [pairs.e], 2.5);
    midiSounds.playChordNow(3, [pairs.g], 2.5);
  }

  function GMajor() {
    setMajor('GBD');
    setTimeout(back, 2000);
    midiSounds.playChordNow(3, [pairs.g], 2.5);
    midiSounds.playChordNow(3, [pairs.d], 2.5);
    midiSounds.playChordNow(3, [pairs.b], 2.5);
  }

  function back() {
    setMajor('');
    setNote('');
  }

  function handleKeyPress(event) {
    console.log(event.target.value);
    if(event.target.value !== '') {
      let k = event.key;
      console.log(k);
      setNote(k);
      setTimeout(back, 2000);
      let kk = k.toString();
      console.log(pairs[kk], kk);
      // console.log(pairs.toString(k));
      if (pairs[kk]) {
        midiSounds.playChordNow(3, [pairs[kk]], 2.5);
      }
    }

  }
  console.log(note);
  
  return (
    <div>
      <div className="main">
        <div className="piano">
          <div className="keys">
            {data.map(d => { return <Key id={d.id} x={d.x} y={d.y} key={d.key} num={d.midinum} major={d.major} noteEntered={note.toUpperCase() === d.key} keyPressed={majorSelected.includes(d.key)} setMidi={setMidi} midiSounds={midiSounds}></Key> })}
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


function Key({ id, keyPressed, major,noteEntered}) { 

  return <div id={id} major={major} className={(keyPressed ? "pressed" : "") + " "+(noteEntered ? 'note':"")}></div>

}

export default App;
