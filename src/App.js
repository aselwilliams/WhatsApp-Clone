import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    //BEM naming convention
    <div className="app">
 <h1>Whats App</h1>

    <div className='app__body'>
      <Router>
      <Sidebar />
      <Routes>
        <Route path='/rooms/:roomId' element={<Chat />} />
        <Route path='/' element={<Chat />} />
      </Routes>
      </Router>
    </div>
    </div>
  );
}

export default App;
