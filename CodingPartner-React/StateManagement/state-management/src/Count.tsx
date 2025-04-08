import { useState } from "react";

const Count = () => {
  const [count, setCount]= useState(0);

  const handleClick = () =>{
    setCount(count + 1);
    console.log(count);
  };
  return (
    <div>
      {count}
      <button onClick={handleClick}>
        Count</button>
      </div>
  )
}

export default Count