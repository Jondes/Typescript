import { MouseEvent } from "react";

function Events( ) {

const employees = [ 'John', 'Tom','Nick'];

const handleClick = (event: MouseEvent) =>{
  console.log(event);
}
  return (
     <ul>
      {employees.map((employee, index) => (
        <li
        key={employee}
        onClick={() =>{
          console.log(employee, index);
        }}
        >
          {employee}
          <button onClick={handleClick}>
          Click</button>
          <input onChange={(event)=> {
            console.log(event.target.value);
          }}></input>
          </li>
      ))}
     </ul>
  ); 
}

export default Events;