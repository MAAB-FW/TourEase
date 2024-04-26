import React from "react"
import SingleTouristCard from "../SingleTouristCard/SingleTouristCard"
import PropTypes from "prop-types"

const TouristsSpots = ({ loadedAllData }) => {
    return (
        <div className="my-24">
            <div className="text-center">
                <h2 className="text-3xl font-bold">Tourists Spots</h2>
                <p className="mt-3">Start exploring now and let the adventure begin!</p>
            </div>
            <div className="mt-16 grid gap-6 grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
                {loadedAllData?.map((touristSpot) => (
                    <SingleTouristCard key={touristSpot._id}></SingleTouristCard>
                ))}
            </div>
        </div>
    )
}

export default TouristsSpots

TouristsSpots.propTypes = {
    loadedAllData: PropTypes.array,
}
