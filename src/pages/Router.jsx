import {
    BrowserRouter,
    Switch,
    Route,
  } from "react-router-dom";


import Navbar from "../components/Navbar/Navbar.jsx";
import ItemListContainer from '../components/ItemListContainer/ItemListContainer.jsx'
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer.jsx';
import Cart from '../components/Cart/Cart.jsx'
import Order from '../components/Order/Order.jsx'
import Contacto from '../components/Contacto/Contacto.jsx'
import Footer from '../components/Footer/Footer.jsx';
import NotFound from './errors/NotFound.jsx'
  
  function Router() {

    return(


      <BrowserRouter>


        <Navbar/>

       
        <Switch>
            <Route path='/' exact>
              <ItemListContainer />
            </Route>

            <Route path='/category/:categoria' exact>
              <ItemListContainer />
            </Route>

            <Route path='/item/:id' exact>
              <ItemDetailContainer />
            </Route>

            <Route path='/cart' exact>
              <Cart />
            </Route>

            <Route path='/payment' exact>
              <Order />
            </Route>

            <Route path='/contacto' exact>
              <Contacto />
            </Route>

            <Route component={NotFound} />

            </Switch>
           
         <Footer />

     
      </BrowserRouter>

    )

  } 

  export default Router