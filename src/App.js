import logo from './logo.svg';
import './App.css';
import Profile from './NotReduxComponent/Profile'
import BaseLayout from './ReduxComponent/Layout'
import ListUsers from './ReduxComponent/Users/ListUsers';
function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
        <ListUsers></ListUsers>
    //   </header>
    // </div>
  );
}

export default App;
