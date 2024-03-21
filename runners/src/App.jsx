import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './components/Login';
import { ListRunner } from './components/ListRunners';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/ListRunner' element={<ListRunner/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
