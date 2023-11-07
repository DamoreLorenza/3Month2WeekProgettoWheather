import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavBar from './components/navBar';
import Today from './components/today';
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
import PP from './components/prova';
import Elenco from './components/oggi';
import PescaraWeek from './components/week/pescaraWeek';
import MilanoWeek from './components/week/milanoWeek';
import RomaWeek from './components/week/romaWeek';
import RiminiWeek from './components/week/riminiWeek';
import AnconaWeek from './components/week/anconaWeek';
import BolognaWeek from './components/week/bolognaWeek';
import CagliariWeek from './components/week/cagliariWeek';
import NapoliWeek from './components/week/napoliWeek';
import UdineWeek from './components/week/udineWeek';
import VeneziaWeek from './components/week/veneziaWeek';
import MateraWeek from './components/week/materaWeek';


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
        <Route element={<PP/>} path='/prova'/>
        <Route element={<Elenco/>} path='/oggi'/>
        <Route element={<PescaraWeek/>} path='/pescaraWeek'/>
        <Route element={<MilanoWeek/>} path='/milanoWeek'/>
        <Route element={<RomaWeek/>} path='/romaWeek'/>
        <Route element={<RiminiWeek/>} path='/riminiWeek'/>
        <Route element={<AnconaWeek/>} path='/anconaWeek'/>
        <Route element={<BolognaWeek/>} path='/bolognaWeek'/>
        <Route element={<CagliariWeek/>} path='/cagliariWeek'/>
        <Route element={<NapoliWeek/>} path='/napoliWeek'/>
        <Route element={<UdineWeek/>} path='/udineWeek'/>
        <Route element={<VeneziaWeek/>} path='/veneziaWeek'/>
        <Route element={<MateraWeek/>} path='/materaWeek'/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;





