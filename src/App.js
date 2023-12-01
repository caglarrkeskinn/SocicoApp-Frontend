import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import User from './components/User/User';
import Home from './components/Home/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar></Navbar>
        <Routes>
          <Route exact path="/" element = {<Home/>}/>
          <Route  exact path = "/users/:userId" element = {<User/>}/>
        </Routes>
       
      </BrowserRouter>
    </div>
  );
}

export default App;
