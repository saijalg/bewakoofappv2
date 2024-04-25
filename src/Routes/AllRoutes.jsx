import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LandingPage from '../Components/landingPage'
import Cart from '../Components/Cart'
import MyOrders from '../Components/MyOrders'
import Return from '../Components/Return'
import SecondReturn from '../Components/SecondReturn'
import LandingPageAcc from '../Components/LandingPageAcc'
import LandingPageWomen from '../Components/LandingPageWomen'
import Login from '../Components/login'
import MenProducts from '../Components/MenProducts'
import OrderSuccessfull from '../Components/smallComp.jsx/OrderSuccessfull'
import PaymentForm from '../Components/smallComp.jsx/PaymentForm'
import SingleProductPage from '../Components/smallComp.jsx/SingleProductPage'
import WomenProducts from '../Components/WomenProducts'
import PrivateRoute from './PrivateRoute'




const AllRoutes = () => {


  return (
    <div>

        <Routes>

            <Route path='/' element={<LandingPage />} />
             <Route path='/landingPage/women' element={<LandingPageWomen />} />
            <Route path='/landingPage/accessories' element={<LandingPageAcc />} />

            <Route path='/men-clothing' 
            element={ <PrivateRoute> <MenProducts /> </PrivateRoute> } />

            <Route path='/women-clothing' 
            element={ <PrivateRoute> <WomenProducts/></PrivateRoute> } />

            <Route path='/mobile-covers-india' 
            element={ <PrivateRoute> <h1>MEN PAGE</h1> </PrivateRoute> } />

            <Route path='/products/:id' element={

            <PrivateRoute>  <SingleProductPage /> </PrivateRoute>
            
            } />

            <Route path='/login' element={<Login />} />

            <Route path='/register' element={<h1>REGISTER PAGE</h1>} /> 

            {/* NAVBAR IS DIFFERENT */}
            <Route path='/cart' 
            element={ <PrivateRoute> <Cart /> </PrivateRoute> } />

            <Route path='/orders' 
            element={ <PrivateRoute> <MyOrders /> </PrivateRoute> } />

            <Route path='/return' 
            element={ <PrivateRoute> <Return /> </PrivateRoute> } />

            <Route path='/SecondReturn' 
            element={ <PrivateRoute> <SecondReturn/> </PrivateRoute> } />

            <Route path='/wishlist' 
            element={ <PrivateRoute> <h1>CART PAGE</h1> </PrivateRoute> } />

            <Route path='/checkout/payment' 
            element={  <PrivateRoute>   <PaymentForm /> </PrivateRoute> } />
            <Route path='/OrderSuccessfull' 
            element={  <PrivateRoute>   <OrderSuccessfull /> </PrivateRoute> }  /> 

        </Routes>
      
    </div>
  )
}

export default AllRoutes
