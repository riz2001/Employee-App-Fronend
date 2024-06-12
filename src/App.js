import logo from './logo.svg';
import './App.css';
import Add from './components/Add';
import View from './components/View';


import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Deleteemployee from './components/Deleteemployee';



function App() {
  return (
    <div>
      <BrowserRouter>
   <Routes>
   <Route path='/' element={<Add/>}/>
    <Route path='/delete' element={<Deleteemployee/>}/>
    <Route path='/viewall' element={<View/>}/>
   </Routes>
  
   </BrowserRouter>


      

   
       
    </div>
  );
}

export default App;
