import React from "react"
import { useLoaderData } from "react-router-dom"

const AllTouristsSpot = () => {
    const allData = useLoaderData()
    console.log(allData)
    return (
        <div>
            <h2>AllTouristsSpot</h2>
        </div>
    )
}

export default AllTouristsSpot
