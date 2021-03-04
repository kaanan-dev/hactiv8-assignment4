import logo from './logo.svg';
import './App.css';
import Profile from './NotReduxComponent/Profile'
import TableUsers from './ReduxComponent/Users/ListUsers'
function App() {
  return (
    <div className="App">
      <TableUsers></TableUsers>
      {/* <header className="App-header">
       <Profile>Vaksin</Profile>
       <Profile>Korona</Profile>
       <Profile>Ahmad Anan R</Profile>
       <Profile>Siapa Aja</Profile>
       <Profile>Bebas</Profile>
      </header> */}
    </div>
  );
}

export default App;
