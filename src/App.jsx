import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './layout/layout';
import HomePage from './pages/home/homePage';
import Login from './pages/login/login';
import SignUp from './pages/signUp/signUp';
import About from './pages/about/about';
import Contact from './pages/contact/contact';
import Wishlist from './pages/wishlist/wishlist';
import Cart from './pages/cart/cart';
import AllProd from './pages/product/allProd';


export default function App(){

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Layout/>,
            children: [
                {
                    path: '/',
                    element: <HomePage/>,
                    index: true
                },
                {
                    path: '/signup',
                    element: <SignUp/>
                },
                {
                    path: '/login',
                    element: <Login/>
                },
                {
                    path: '/about',
                    element: <About/>
                },
                {
                    path: '/contact',
                    element: <Contact/>
                },
                {
                    path: '/wishlist',
                    element: <Wishlist/>
                },
                {
                    path: '/cart',
                    element: <Cart/>
                },
                {
                    path: '/allproduct',
                    element: <AllProd/>
                },
            

            ]
        }
    ])

    return <RouterProvider router={router}/>
}