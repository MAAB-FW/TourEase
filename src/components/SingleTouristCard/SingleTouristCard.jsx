import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"

const SingleTouristCard = ({ touristSpot }) => {
    console.log(touristSpot)
    const {
        _id,
        tourists_spot_name,
        image,
        country_name,
        short_description,
        travel_time,
    } = touristSpot

    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure>
                    <img className="rounded-2xl" src={image} alt="Shoes" />
                </figure>
                <div className="card-body gap-0">
                    <h2 className="font-bold text-2xl">{tourists_spot_name}</h2>
                    <h2 className="text-right font-bold text-rose-600 text-xl">{country_name}</h2>
                    <p className="text-[#1f2937] font-sans">{short_description.split(" ").slice(0, 15).join(" ")}...</p>
                    <div className="flex items-center justify-between">
                        <p className="font-semibold">Travel Time: {travel_time}</p>
                        <Link to={`/view-details/${_id}`} className="btn bg-[#0096ac] text-white">
                            View Details
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleTouristCard
SingleTouristCard.propTypes = {
    touristSpot: PropTypes.object,
}
