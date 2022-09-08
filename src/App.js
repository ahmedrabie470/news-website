import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Sports from './Components/Sports/Sports';
import Health from './Components/Health/Health';
import Technology from './Components/Technology/Technology';
import Science from './Components/Science/Science';
import General from './Components/General/General';
import Business from './Components/Business/Business';
import Entertainment from './Components/Entertainment/Entertainment';


import Navbar from './Components/Navbar/Navbar';
import NewsContextProvider from './Context/Store';

function App() {
  return (
    <>
    <NewsContextProvider>
    <Navbar/>

<Routes>
<Route path='/' element={<Home/>}/>

  <Route path='home' element={<Home/>}/>
  <Route path='Sports' element={<Sports/>}/>
  <Route path='Health' element={<Health/>}/>
  <Route path='Technology' element={<Technology/>}/>
    <Route path='Science' element={<Science/>}/>
    <Route path='General' element={<General/>}/>
    <Route path='Entertainment' element={<Entertainment/>}/>
    <Route path='Business' element={<Business/>}/>
</Routes>  
</NewsContextProvider>
</>
  );
}

export default App;
