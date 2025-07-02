import Head from "./../components/header";
import Foot from "./../components/foot";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Head />
      <main className="max-w-[1600px] m-auto">
        <Outlet />
      </main>
      <Foot />
    </>
  );
}
