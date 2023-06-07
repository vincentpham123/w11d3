import {Switch,Route,Redirect} from 'react-router-dom';
import NavBar from './Components/NavBar';
import logo from './logo.png';
import './app.css';
function App() {
  return (
    <>
    <header>
    <img id='logo' src={logo} alt='logo' width='200px'/>
    <div id='titles'>
    <h1>Survey Tool</h1>
    <h2> Home</h2>
    </div>
    </header>
    <NavBar />
    </>
  );
}

export default App;
