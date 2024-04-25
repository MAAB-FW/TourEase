import { Outlet } from "react-router-dom"
import "./App.css"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"

function App() {
    return (
        <div className="max-w-[1440px] mx-auto font-mont">
            <div className="w-[83%] mx-auto">
                <Navbar></Navbar>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default App
