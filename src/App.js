import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
function App() {
  const [status, setStatus] = useState("Show")
  const list = <ul style={status === "Show" ? {display: "block"} : {display: "none"}}>
    <li>Pham Duc Trung</li>
    <li>Pham Duc Trinh</li>
    <li>Pham Duc Trong</li>
  </ul>
  const clickMe =()=>{
    {status === "Show"? setStatus("Hide") : setStatus("Show")}
  }
  return (
    <div className="App">
     <button onClick={clickMe}>{status === "Show" ? "Show" : "Hide"}</button>
     {list}
    </div>
  );
}

export default App;
