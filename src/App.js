
import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Features from './Components/Features/Features';
import Home from './Components/Home/Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Reviews from './Components/Reviews/Reviews';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/features' element={<Features/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes> 
        <Reviews/>
      </BrowserRouter>
    </div>
  );
}

export default App;
