
import Head from './../components/header';
import Foot from './../components/foot';
import { Outlet } from 'react-router-dom';


export default function Layout() {

    return (
        <>
          <Head/>
          <Outlet/>
          <Foot/>
        </>
    )
}