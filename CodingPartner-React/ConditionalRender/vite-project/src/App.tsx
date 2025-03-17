import UserGreeting from "./UserGreeting"

const App = () => {
  return (
    <div>
      <UserGreeting isLoggedIn={false} username = 'Johnson' />
    </div>
  )
}

export default App