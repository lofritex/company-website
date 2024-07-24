import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";

export default function RootLayout() {
  return (
    <div className="">
      <header className="h-nav">
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
