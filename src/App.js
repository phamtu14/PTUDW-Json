import './App.css';
import UserId from './getUserID/UserId';
import AllUser from './getAllUser/AllUser';
import CreateUser from './createUser/CreateUser';




function App() {
  return (
    <div className="App">
       <h1>JSONPLACEHOLDER API EXAMPLE</h1>

    <UserId />
    <AllUser />
    <CreateUser />

    </div>
  );
}

export default App;
