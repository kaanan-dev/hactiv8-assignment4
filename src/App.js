import logo from './logo.svg';
import './App.css';
import Profile from './NotReduxComponent/Profile'
function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Profile>Barbatos</Profile>
       <Profile>Freedom</Profile>
       <Profile>Ahmad Anan R</Profile>
       <Profile>Siapa Aja</Profile>
       <Profile>Barbatos</Profile>
      </header>
    </div>
  );
}

export default App;
