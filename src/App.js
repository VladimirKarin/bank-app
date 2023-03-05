import { useState } from 'react';
import AddUserForm from './Components/AddUserForm';
import './App.css';
import TotalCount from './Components/TotalCount';
import UserProfile from './Components/UserProfile';
import ContextData from './ContextData';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [user, setUser] = useState([]);
  const [usersFirstName, setUsersFirstName] = useState([]);
  const [usersLastName, setUsersLastName] = useState([]);
  const [usersBalance, setUsersBalance] = useState(0);
  const [totalUsersCount, setTotalUsersCount] = useState(0);
  const [totalMoneyCount, setTotalMoneyCount] = useState(0);
  // const [messages, setMessages] = useState();


  return (
    <ContextData.Provider value={{
      user,
      setUser,
      usersFirstName,
      setUsersFirstName,
      usersLastName,
      setUsersLastName,
      usersBalance,
      totalUsersCount,
      setTotalUsersCount,
      totalMoneyCount,
      setTotalMoneyCount,

    }}>

      <div className="App">
        <header className="App-header">
          <TotalCount />
          <AddUserForm />
          {/* <UserProfile /> */}
        </header>
      </div>
    </ContextData.Provider>
  );
}

export default App;
