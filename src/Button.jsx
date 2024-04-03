function PrintHello(){
  console.log( "Hello World!" );
}
function PrintBye(){
  console.log("Goodbye!");
}
export default function Button(params) {
  return(
    <div>
      <button onClick={PrintHello}>click me</button>
      <p onClick={PrintBye}>This is a paragraph.</p>
    </div>
  )
}