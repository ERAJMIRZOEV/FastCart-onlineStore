import React from 'react'
import Head from './components/header'
import SignUp from './components/signUp'
import Foot from './components/foot'
import NotFound from './components/notFound'
import Login from './components/login'
import HomePage from './components/homePage'
import AllProd from './components/allProd'
import Wishlist from './components/wishlist';
import DetailPage from './components/detailPage'
import About from './components/about'
import Cart from './components/cart'
import Account from './components/account'
import Contact from './components/contact'

export default function App() {
  return (
    <div>
      <Head/>
       <HomePage/>
      <Foot/>
    </div>
  )
}
