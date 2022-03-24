import React from 'react';
import './App.css';
import {CartProvider} from './components/CartContext/CartContext.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import Footer from './components/Footer/Footer.jsx';
import Router from './pages/Router.jsx'


export default ()=> <CartProvider>
                      <App></App>
                    </CartProvider>


function App() {

  return (
        <>
        <Router>
          <Navbar/>
          <ItemListContainer />
          <Footer />
        </Router>
      </>
  );
}

