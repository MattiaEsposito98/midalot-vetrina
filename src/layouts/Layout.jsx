import { Outlet } from "react-router-dom"
import Navbar from "./ Navbar";
import Footer from "./ Footer";

export default function Layout() {
  return (
    <>
      <div className="d-flex flex-column vh-100">
        <Navbar />
        <main className="flex-grow-1 bg-info-subtle">
          <Outlet />
        </main>

        <Footer />
      </div>
    </>
  )
}