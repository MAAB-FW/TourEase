import React, { useEffect, useState } from "react"
// import { useLoaderData } from "react-router-dom"
import SingleTouristCard from "../../components/SingleTouristCard/SingleTouristCard"
import EmptyMsg from "../../components/EmptyMsg/EmptyMsg"

const AllTouristsSpot = () => {
    // const loadedData = useLoaderData() || []
    const [allData, setAllData] = useState([])
    console.log(allData)

    useEffect(() => {
        fetch("https://maab-fw-assignment-10-server.vercel.app/all-tourists-spot")
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setAllData(data)
            })
    }, [])

    const handleSort = () => {
        const sorted = [...allData].sort((a, b) => a.average_cost - b.average_cost)
        console.log(sorted)
        setAllData(sorted)
    }

    if (allData.length < 1) return <EmptyMsg></EmptyMsg>
    return (
        <div className="my-10 mb-20">
            <h2 className="text-center font-bold text-3xl my-8 text-info">All Tourists Spot</h2>
            <div className="flex justify-center">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn m-1">
                        Sort by
                    </div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <button onClick={handleSort}>Average Cost</button>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="grid gap-6  grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {allData?.map((touristSpot) => (
                    <SingleTouristCard key={touristSpot._id} touristSpot={touristSpot}></SingleTouristCard>
                ))}
            </div>
        </div>
    )
}

export default AllTouristsSpot
