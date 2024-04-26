import LotteryGame from "./LotteryGame";
import Ticket from "./Ticket";
import { sum } from "./helper";
function App(params) {


  // let WinCond = (ticket)=>{
  //   return  sum(ticket) === 15
  // }
  // let WinCond = (ticket)=>{
  //   return  ticket.every((num)=> num === ticket[0]) 
  // } 
  let WinCond = (ticket)=>{
    return ticket[0] === 0;
  } 
  return(
    <>
   {/* <TicketNum num={5} />
   <TicketNum num={2} />
   <TicketNum num={1} /> */}
   {/* <Ticket ticket={[0,1,2]}/> */}
   <LotteryGame num={3} WinCond={WinCond}/>
    </>
  )
}

export default App;