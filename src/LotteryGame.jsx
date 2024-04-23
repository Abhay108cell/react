import { useState } from "react";
import "./LotteryGame.css";
import { genNumber, sum } from "./helper";
export default function LotteryGame(){
  let [ticket, setTicket] = useState(genNumber(3))
  let isWinning = sum(ticket) === 15

  let buyTicket= ()=>{
    setTicket(genNumber(3));
  }

  return(
    <div><h1>Lottery Game </h1>
    <div className="ticket">
      <span>{ticket[0]}</span>
      <span>{ticket[1]}</span>
      <span>{ticket[2]}</span>
    </div>
    <br />
    <div className="center-button">
    <button   onClick={buyTicket}>Buy Ticket</button>
    <br />

    </div>
    <h3 className="center-item">{isWinning && "congratulations you won!"}</h3>

    </div>
   
  )
}