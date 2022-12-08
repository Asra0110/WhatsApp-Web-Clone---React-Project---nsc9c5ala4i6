import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import ChatPage from './Components/ChatPage';
import { useState } from 'react';
import Login from './Components/Login';

function App() {

  const [user, setUser] = useState();
  console.log(user);

  return (
    <Router>
   <div className="App">
       {
        user ? 
      (<Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/chatpage' element={<ChatPage/>} />
      </Routes>) : (<Login setUser={setUser}/> 
      )}
    </div>
    {/* <div className="App">
    
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/chatpage' element={<ChatPage/>} />
      </Routes> 
      </div> */}
    
    </Router>
  );
}

export default App;

