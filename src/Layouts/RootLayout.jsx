import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";

export default function RootLayout() {
  return (
    <div className="">
      <header className="w-full ">
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
