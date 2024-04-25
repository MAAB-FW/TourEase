import React from "react"
import {  ScaleLoader } from "react-spinners"

const Loading = () => {
    return (
        <div>
            <div className="flex justify-center h-full">
                <ScaleLoader className="my-28" color="#1ea7fd" size={100} />
            </div>
        </div>
    )
}

export default Loading
