import { Outlet } from "react-router-dom"
import "./App.css"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import "react-tooltip/dist/react-tooltip.css"

function App() {
    return (
        <div className="max-w-[1440px] mt-24 mx-auto font-mont">
            <div className="w-[90%] md:w-[83%] mx-auto">
                <Navbar></Navbar>
                <div className="mt-32">
                    <Outlet></Outlet>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default App
