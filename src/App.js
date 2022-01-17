import React, { useState } from "react";
import Parent from "./Component/Parent";
// import Message from './Component/Message';
import "./App.css";
import counterContext from "./CreateContext";

function App() {
  // let [count , setCount ] = useState(0)
  // let [isMorning , setisMorning] = useState(true)+
  let counter = useState(25);
  return (
    <counterContext.Provider value={counter}>
      <div>
        <Parent />
      </div>
    </counterContext.Provider>

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
