

function ConditionalRender() {
  const list = ['Apple'];

  const isLoggedIn = true;

  /* const type: string = 'List';
  switch (type) {
    case 'List':
      return <div>We have a list </div>; break;
    case 'String':
      return <div>We have a string </div>; break;
    default:
      return <div>We do not have a String and List</div>;  break;

  /* if(isLoggedIn)
    return<div>You are welcome John</div>
    else
    return<div>You are not welcome</div> */
  // const element = isLoggedIn ? <div>You are welcome John</div> : <div>You are not welcome</div>
  {/* {element} */ }

  return (
    <div>
      {list.length > 0 && <div> We have a List</div>} <br />

      {isLoggedIn ? <div>You are welcome John</div> : <div>You are not welcome</div>}
    </div >
  )
}

export default ConditionalRender