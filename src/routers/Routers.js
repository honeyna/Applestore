import { Routes, Route, Navigate } from 'react-router-dom'

import Home from '../pages/Home'
import Cart from '../pages/Cart'
import ProductDetails from '../pages/ProductDetails'
import Checkout from '../pages/Checkout'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Mac from '../pages/Mac'
import Shop from '../pages/Shop'
import Watch from '../pages/Watch'
import Ipad from '../pages/Ipad'
import Iphone from '../pages/Iphone'
import Airpods from '../pages/Airpods'
import Tv from '../pages/Tv'

const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='home' />} />
      <Route path='home' element={<Home />} />
      <Route path='shop' element={<Shop />} />
      <Route path='mac' element={<Mac />} />
      <Route path='ipad' element={<Ipad />} />
      <Route path='iphone' element={<Iphone />} />
      <Route path='watch' element={<Watch />} />
      <Route path='airpods' element={<Airpods />} />
      <Route path='tv&home' element={<Tv />} />
      <Route path='shop/:id' element={<ProductDetails />} />
      <Route path='cart' element={<Cart />} />
      <Route path='checkout' element={<Checkout />} />
      <Route path='login' element={<Login />} />
      <Route path='signup' element={<Signup />} />
    </Routes>
  )
}

export default Routers

