import logo from './logo.svg';
import './App.css';
import Login from "./Login"
import Forgot from './Components/Forgot';
import Home from './Components/Home';
import Button from './Components/Button';
import  './Components/AppGreen.css' 
import  './Components/AppSpl.css' 
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbarshop from './Navbarshop';
import Shopnav from './Shopnav';
import HomeGreen from './Components/HomeGreen'
import MyComponent from './Components/MyComponent'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/forgot' element={<Forgot/>}/>
         
        <Route>
        <Route path='/buttons' element={<Button/>}/>
        <Route path='/form' element={<Navbarshop/>}/>
        <Route path='/greenkart' element={<HomeGreen/>}/>
        <Route path='/topdeals' element={<MyComponent/>}/>
       
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/check" element={<CheckoutPage />} /> */}
        {/* <Route path="/cart" element={<Cart />} /> */}
     
        </Route>



      </Routes>
      </BrowserRouter>
      

    </div>
  );
}

export default App;
