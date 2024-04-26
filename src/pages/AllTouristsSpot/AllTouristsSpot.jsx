import React from "react"
import { Link, useLoaderData } from "react-router-dom"
import SingleTouristCard from "../../components/SingleTouristCard/SingleTouristCard"

const AllTouristsSpot = () => {
    const allData = useLoaderData() || {}
    console.log(allData)
    if (allData.length < 1)
        return (
            <div className="text-center text-3xl font-bold h-screen flex flex-col gap-7 items-center justify-center ">
                <p>
                    <span className="text-error">Oops!&#160;</span> No Data Found
                </p>
                <Link to="/add-tourists-spot" className="btn btn-success">
                    Add Tourists Spot
                </Link>
            </div>
        )
    return (
        <div>
            <div className="my-16 grid gap-6 grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
                {allData?.map((touristSpot) => (
                    <SingleTouristCard key={touristSpot._id}></SingleTouristCard>
                ))}
            </div>
        </div>
    )
}

export default AllTouristsSpot
