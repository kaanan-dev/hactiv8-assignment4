import logo from './logo.svg';
import './App.css';
import Profile from './NotReduxComponent/Profile'
function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Profile>Vaksin</Profile>
       <Profile>Korona</Profile>
       <Profile>Ahmad Anan R</Profile>
       <Profile>Siapa Aja</Profile>
       <Profile>Bebas</Profile>
      </header>
    </div>
  );
}

export default App;
