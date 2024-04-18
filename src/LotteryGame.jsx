import "./LotteryGame.css" 
import { useState } from "react";
import { genNumber,sum } from "./helper";
export default function LotteryGame(){
  let [ticket, setTicket] = useState(genNumber(3));
  let isWinning = sum(ticket) === 15; 
  return(
    <div> 
      <h1>Lottery Game</h1>
      <div className="ticket">
        <span>{ticket[0]}</span>
        <span>{ticket[1]}</span>
        <span>{ticket[2]}</span>
      </div>
      {/* <h3>{isWinning && "congratulations you won"}</h3> */}
    </div>
  )
}