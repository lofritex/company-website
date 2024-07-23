import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";

export default function RootLayout() {
  return (
    <div className="">
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
