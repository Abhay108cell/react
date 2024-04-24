import LotteryGame from "./LotteryGame";
import Ticket from "./Ticket";
function App(params) {
  return(
    <>
   {/* <TicketNum num={5} />
   <TicketNum num={2} />
   <TicketNum num={1} /> */}
   <Ticket ticket={[0,1,2]}/>
   {/* <LotteryGame/> */}
    </>
  )
}

export default App;