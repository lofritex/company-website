import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";

export default function RootLayout() {
  return (
    <div className="w-full">
      <header className="w-full fixed z-50">
        <Navbar />
      </header>
      <main className="w-full pt-32">
        <Outlet />
      </main>
      <footer className="w-full">
        <Footer />
      </footer>
    </div>
  );
}
