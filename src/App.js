import React,{useState,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  const[data,setdata]=useState([])
  const getdata= async ()=>{
  const response= await fetch("https://data.covid19india.org/data.json");
  const resp=await response.json();
  console.log(resp.statewise[0]);
  setdata(resp.statewise[0]);
  }
  useEffect(()=>{getdata()},[]);
  return (
    <div className="bg">
    <center><div className="one">
     <h2>Ishan covid tracker(India)</h2>
     </div>
     </center>
      <br/>
      <center><div className="two">
     <h3>Active cases={data.active }</h3>
     </div>
     </center>
      <br/>
      <center><div className="three">
     <h3>Confirmed cases={data.confirmed }</h3>
     </div>
     </center>
      <br/>
      <center><div className="four">
     <h3>deaths={data.deaths }</h3>
     </div>
     </center>
      <br/>
      <center><div className="five">
     <h3>Recovered={data.recovered }</h3>
       </div>
     </center>
     <br/>
     <center><div className="five">
     <h3>lastupdatedtime={data.lastupdatedtime }</h3>
     </div>
     </center>
     </div>
    
     
  
  );
}

export default App;
