import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import {ToastContainer} from 'react-toastify'
import { BrowserRouter as Router,Route, Routes,} from 'react-router-dom';
import Home from './pages/home';
import ProductDetail from './pages/productDetails';
import { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import Cart from './pages/cart';



function App() {
  const [cartItems , setcartItems] = useState([])



  return (
    <div className="App">
         
          <Router>
              <div>
                <ToastContainer theme='dark'/>
                <Header cartItems={cartItems}/>
                <Routes>
                   <Route path="/" element={ <Home/> }/>
                   <Route path="/search" element={ <Home/> }/>
                   <Route path="/product/:id" element={ <ProductDetail cartItems={cartItems} setcartItems={setcartItems}/> }/>
                   <Route path="/cart" element={ <Cart cartItems={cartItems} setcartItems={setcartItems}/> }/>
                </Routes> 
              </div>
          </Router>
        <Footer/>
     </div>
  );
}

export default App;
