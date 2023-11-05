import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavBar from './components/navBar';
import Today from './components/today';
import Detail from './components/detail';
import Temp from './components/temperature';
import Pescara from './components/city/pescara';
import Milano from './components/city/milano';
import Roma from './components/city/roma';
import Rimini from './components/city/rimini';
import Ancona from './components/city/ancona';
import Bologna from './components/city/bologna';
import Cagliari from './components/city/cagliari';
import Napoli from './components/city/napoli';
import Udine from './components/city/udine';
import Venezia from './components/city/venezia';
import Matera from './components/city/matera';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <NavBar/>
      </header>
      <Today/>
  
      
      <BrowserRouter>
      <Routes>
      <Route element={<Temp/>} path='/temperature'/>
        <Route element={<Pescara/>} path='/pescara'/>
        <Route element={<Milano/>} path='/milano'/>
        <Route element={<Roma/>} path='/roma'/>
        <Route element={<Rimini/>} path='/rimini'/>
        <Route element={<Ancona/>} path='/ancona'/>
        <Route element={<Bologna/>} path='/bologna'/>
        <Route element={<Cagliari/>} path='/cagliari'/>
        <Route element={<Napoli/>} path='/napoli'/>
        <Route element={<Udine/>} path='/udine'/>
        <Route element={<Venezia/>} path='/venezia'/>
        <Route element={<Matera/>} path='/matera'/>
      <Route element={<Detail/>} path='/detail'/>
      
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

