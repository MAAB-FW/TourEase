import React, { useEffect, useState } from "react"
import SingleTouristCard from "../SingleTouristCard/SingleTouristCard"
import PropTypes from "prop-types"
import Loading from "../Loading/Loading"
import EmptyMsg from "../EmptyMsg/EmptyMsg"

const TouristsSpots = () => {
    const [allData, setAllData] = useState([])
    const [load, setLoad] = useState(true)

    useEffect(() => {
        setLoad(true)
        fetch("https://maab-fw-assignment-10-server.vercel.app/all-tourists-spot")
            .then((res) => res.json())
            .then((data) => {
                // console.log(data)
                setAllData(data)
                setLoad(false)
            })
    }, [])

    if (load) return <Loading></Loading>
    if (allData.length < 1) return <EmptyMsg></EmptyMsg>

    return (
        <div className="my-24">
            <div className="text-center">
                <h2 className="text-3xl font-bold">Tourists Spots</h2>
                <p className="mt-3">Start exploring now and let the adventure begin!</p>
            </div>
            <div className="mt-16 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {allData?.slice(0, 6).map((touristSpot) => (
                    <SingleTouristCard key={touristSpot._id} touristSpot={touristSpot}></SingleTouristCard>
                ))}
            </div>
        </div>
    )
}

export default TouristsSpots

TouristsSpots.propTypes = {
    loadedAllData: PropTypes.array,
}
