import { useState } from "react";
import "./LotteryGame.css";
export default function LotteryGame(){
  let [ticket, setTicket] = useState([0,0,0])
  return(
    <div><h1>Lottery Game </h1>
    <div className="ticket">
      <span>{ticket[0]}</span>
      <span>{ticket[1]}</span>
      <span>{ticket[2]}</span>
    </div>
    </div>
   
  )
}