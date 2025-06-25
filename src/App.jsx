import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './components/homePage';
import Layout from './layout/layout';
import Login from './components/login';
import SignUp from './components/signUp';
import AllProd from './components/allProd';
import Contact from './components/contact';
import About from './components/about';
import Wishlist from './components/wishlist';
import Cart from './components/cart';


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