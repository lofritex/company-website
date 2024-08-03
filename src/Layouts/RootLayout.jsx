import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";

export default function RootLayout() {
  return (
    <div className="w-full flex flex-col">
      <header className="w-full fixed z-50">
        <Navbar />
      </header>
      <main className="w-full">
        <Outlet />
      </main>
      <footer className="w-full">
        <Footer />
      </footer>
    </div>
  );
}
