import { useState } from "react"
export default function LudoGame(){
  let [moves, SetMoves] = useState({blue:0, red:0, yellow:0, green:0});
  let updateBlue =()=>{
    SetMoves((prevMoves)=>{
      return  {...prevMoves , blue: prevMoves.blue+1}
    })
  }
  let updateRed =()=>{
    SetMoves((prevMoves)=>{
      return  {...prevMoves , red: prevMoves.red+1}
    })
  }
  let updateYellow =()=>{
    SetMoves((prevMoves)=>{
      return  {...prevMoves , yellow: prevMoves.yellow+1}
    })
  }
  let updateGreen =()=>{
    SetMoves((prevMoves)=>{
      return  {...prevMoves , green: prevMoves.green+1}
    })
  }
  return(
    <div>
      <p> Ludo Game</p>
      <div className="ludo">
        <p> Blue Moves = {moves.blue} </p>
        <button style={{backgroundColor: "blue"}} onClick={updateBlue}>+1</button>
        <p> Red Moves = {moves.red}</p>
        <button style={{backgroundColor: "red"}} onClick={updateRed}>+1</button>
        <p> Yellow Moves = {moves.yellow} </p>
        <button style={{backgroundColor: "yellow"}} onClick={updateYellow}>+1</button>
        <p> Green Moves = {moves.green} </p>
        <button style={{backgroundColor: "green"}} onClick={updateGreen}>+1</button>
      </div>
    </div>
  )
}