import Nevbar from "./components/Nevbar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <header className="m-0 p-0">
        <Nevbar />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
