import Ticket  from "./Ticket";
import "./LotteryGame.css"
import { useState } from "react";
// import "./LotteryGame.css";
import { genNumber, sum } from "./helper";
export default function LotteryGame({num=3, WinCond}){
  let [ticket, setTicket] = useState(genNumber(num))
  let isWinning = WinCond(ticket)

  let buyTicket= ()=>{
    setTicket(genNumber(num));
  }

  return(
    <div><h1>Lottery Game </h1>
    <Ticket ticket={ticket}/>
    <div className="center-button">
    

    <button   onClick={buyTicket}>Buy Ticket</button>

    </div>
    <h3 className="center-item">{isWinning && "congratulations you won!"}</h3>

    </div>
   
  )
}