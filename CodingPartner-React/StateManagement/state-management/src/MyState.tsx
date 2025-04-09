import { useState } from "react";

const MyState = () => {
  const [count, setCount]= useState(0);
  const handleClick = () =>{
    setCount(count + 1);
    console.log(count);
  };

  return (
    <div>
      {count}
      <button onClick = {handleClick} >
        Click
      </button>
    </div>
  )
}

export default MyState