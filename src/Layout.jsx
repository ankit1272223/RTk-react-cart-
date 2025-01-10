import Nevbar from "./components/Nevbar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="sticky top-0 z-50">
        <Nevbar />
      </header>
      <main className="container mx-auto px-4">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
