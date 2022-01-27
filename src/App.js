import React, { useState } from "react";
import Parent from "./Component/Parent";
// import Message from './Component/Message';
import "./App.css";
import CounterContext from "./CreateContext";

function App() {
  // let [name , setName ] = useState("")
  
  // let [isMorning , setisMorning] = useState(true)+
  let counter = useState(0);
  return (
    <CounterContext.Provider value={counter}>
      <div>
        <Parent />
        {/* <input type="text" name="" onChange={(e) => setName(e.target.value)} id="" /> */}
      </div>
    </CounterContext.Provider>

    // <div className={`Box ${isMorning ? 'dayLight' : 'nightLight'}`}>
    //     <h1>Good {isMorning ? "Morning" : "Night"}</h1>
    //     <button onClick={() => {setisMorning(!isMorning)}}>Update Day</button>
    //   <button onClick={() => {setCount(count + 1)}}>Addition</button>
    //   <Message counter={count}/>
    //  <button onClick={() => {setCount(count - 1)}}>Subtraction</button>
    // </div>
  );
}

export default App;
