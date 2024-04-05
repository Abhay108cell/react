import { useState } from "react"
export default function LudoGame(){
  let [moves, SetMoves] = useState({blue:0, red:0, yellow:0, green:0});
  let update =()=>{
    moves.blue += 1;
    console.log(`moves.blue = ${moves.blue}`);
    SetMoves({...moves})
  }
  return(
    <div>
      <p> Ludo Game</p>
      <div className="ludo">
        <p> Blue Moves = {moves.blue} </p>
        <button style={{backgroundColor: "blue"}} onClick={update}>+1</button>
        <p> Red Moves = {moves.red}</p>
        <button style={{backgroundColor: "red"}}>+1</button>
        <p> Yellow Moves = {moves.yellow} </p>
        <button style={{backgroundColor: "yellow"}}>+1</button>
        <p> Green Moves = {moves.green} </p>
        <button style={{backgroundColor: "green"}}>+1</button>
      </div>
    </div>
  )
}