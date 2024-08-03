import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";

export default function RootLayout() {
  return (
    <div className="w-full">
      <header className="w-full  sticky top-0 left-0 z-10">
        <Navbar />
      </header>
      <main className="w-full ">
        <Outlet />
      </main>
      <footer className="w-full">
        <Footer />
      </footer>
    </div>
  );
}
