import React from "react"
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"

const Footer = () => {
    return (
        <div className="dark:bg-[#e7e7e7] bg-gray-900 mx-auto">
            <footer className="w-[83%] mx-auto text-white py-8">
                <div className=" mx-auto flex flex-wrap justify-between">
                    <div className="w-full md:w-1/3 lg:w-auto mb-8 md:mb-0">
                        <h4 className="text-lg font-bold mb-4">TourEase</h4>
                    </div>
                    <div className="w-full md:w-1/3 lg:w-auto mb-8 md:mb-0">
                        <h4 className="text-lg font-bold mb-4">Contact Us</h4>
                        <p className="text-sm">Email: info@tourease.com</p>
                        <p className="text-sm">Phone: +1 (123) 456-7890</p>
                    </div>
                    <div className="w-full md:w-1/3 lg:w-auto">
                        <h4 className="text-lg font-bold mb-4">Follow Us</h4>
                        <div className="flex">
                            <a href="" className="mr-4">
                                <FaFacebook className="text-white" />
                            </a>
                            <a href="" className="mr-4">
                                <FaTwitter className="text-white" />
                            </a>
                            <a href="">
                                <FaInstagram className="text-white" />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
            <h4 className="mb-4 text-center  text-white">© 2024 TourEase. All rights reserved.</h4>
        </div>

    )
}

export default Footer
