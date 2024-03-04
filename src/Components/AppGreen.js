import logo from "./logo.svg";
import "./App.css";
import Header from "./component/Header";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./component/Home";
import Cart from "./component/Cart";
import { Routes,Route } from "react-router-dom";
import CheckoutPage from "./component/CheckoutPage";
import Routingcomp from "./component/Routingcomp";

function App() {
  return (
    <div className="App">
    
      {/* <Header /> */}

      <Routingcomp/>
    </div>
  );
}

export default App;
