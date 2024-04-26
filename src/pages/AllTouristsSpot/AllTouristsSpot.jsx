import React from "react"
import { useLoaderData } from "react-router-dom"
import SingleTouristCard from "../../components/SingleTouristCard/SingleTouristCard"
import EmptyMsg from "../../components/EmptyMsg/EmptyMsg"

const AllTouristsSpot = () => {
    const allData = useLoaderData() || {}
    console.log(allData)
    if (allData.length < 1) return <EmptyMsg></EmptyMsg>
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
