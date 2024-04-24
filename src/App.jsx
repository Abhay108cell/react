import LotteryGame from "./LotteryGame";
import TicketNum from "./TicketNum";
function App(params) {
  return(
    <>
   <TicketNum num={5} />
   <TicketNum num={2} />
   <TicketNum num={1} />
   {/* <LotteryGame/> */}
    </>
  )
}

export default App;