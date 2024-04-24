import TicketNum from  "./TicketNum";
import "./Ticket.css"
export default function Ticket({ticket}){
  return(
    <div className="Ticket">
  {/* <TicketNum num={ticket[0]}/ >
  <TicketNum num={ticket[1]}/ >
<TicketNum num={ticket[2]}/ > */}

{/* <p className="tickets">Tickets</p> */}
 {ticket.map((num, idx)=>(
  <TicketNum key={idx} num={num}/>
 ))}

    </div>
  )
}