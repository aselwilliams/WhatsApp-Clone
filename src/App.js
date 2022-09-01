import { Chat } from '@mui/icons-material';
import './App.css';
import Sidebar from './Sidebar';

function App() {
  return (
    //BEM naming convention
    <div className="app">
 <h1>Let's Build</h1>

    <div className='app__body'>
      <Sidebar />
      <Chat />

    </div>
    </div>
  );
}

export default App;
