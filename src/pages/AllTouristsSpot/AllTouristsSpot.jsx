import React, { useEffect, useState } from "react"
// import { useLoaderData } from "react-router-dom"
import SingleTouristCard from "../../components/SingleTouristCard/SingleTouristCard"
import EmptyMsg from "../../components/EmptyMsg/EmptyMsg"

const AllTouristsSpot = () => {
    // const allData = useLoaderData() || {}
    // console.log(allData)
    const [allData, setAllData] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/all-tourists-spot")
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setAllData(data)
            })
    }, [])

    if (allData.length < 1) return <EmptyMsg></EmptyMsg>
    return (
        <div className="my-10 mb-20">
            <h2 className="text-center font-bold text-3xl my-8 text-info">All Tourists Spot</h2>
            <div className="grid gap-6 grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
                {allData?.map((touristSpot) => (
                    <SingleTouristCard key={touristSpot._id}></SingleTouristCard>
                ))}
            </div>
        </div>
    )
}

export default AllTouristsSpot
