function UserGreeting(props){


  return(props.isLoggedIn 
    ? <h2 className="message">Welcome{props.name}</h2>
    : <h2 className="login">Not Welcome</h2>
  );
  }

export default UserGreeting