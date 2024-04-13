import "./LotteryGame.css" 
import { useState } from "react";
import { genNumber } from "./helper";
export default function LotteryGame(){
  let [ticket, setTicket] = useState(genNumber(3));
  return(
    <div> 
      <h1>Lottery Game</h1>
      <div className="ticket">
        <span>{ticket[0]}</span>
        <span>{ticket[1]}</span>
        <span>{ticket[2]}</span>
      </div>
    </div>
  )
}