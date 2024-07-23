import { NavLink as Link, Outlet } from "react-router-dom"

export default function RootLayout() {
  return (
    <div className="">
        <nav className="flex ">
            <span>
            </span>
        </nav>
        <Outlet/>
        </div>
  )
}
