

function ConditionalRender()  {
 
const isLoggedIn = true;

/* if(isLoggedIn)
  return<div>You are welcome John</div>
  else
  return<div>You are not welcome</div> */

  // const element = isLoggedIn ? <div>You are welcome John</div> : <div>You are not welcome</div>
  
  return <>
     {/* {element} */}
     {isLoggedIn ? <div>You are welcome John</div> : <div>You are not welcome</div>}
  </>
  
}

export default ConditionalRender