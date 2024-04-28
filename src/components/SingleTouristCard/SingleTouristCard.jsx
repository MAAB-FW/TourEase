import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"

const SingleTouristCard = ({ touristSpot }) => {
    console.log(touristSpot)
    const {
        _id,
        tourists_spot_name,
        image,
        // country_name,
        short_description,
        average_cost,
        seasonality,
        travel_time,
        total_visitors_per_year,
    } = touristSpot

    return (
        <div>
            <div className="p-5 h-full justify-between bg-base-100 shadow-xl">
                <div>
                    <figure className="">
                        <img className="rounded-2xl w-full min-h-56 object-cover" src={image} alt={tourists_spot_name} />
                    </figure>
                    <div className="my-4">
                        <h2 className="font-bold text-2xl">{tourists_spot_name}</h2>
                        {/* <h2 className="text-right font-bold text-rose-600 text-xl">{country_name}</h2> */}
                        <p className="text-[#1f2937] mt-3 font-sans overflow-hidden text-wrap">
                            {short_description.split("").slice(0, 100).join("")}...
                        </p>
                    </div>
                </div>
                <div>
                    <div className=" text-slate-500">
                        <div className="flex justify-between mb-2">
                            <p className="">
                                Average Cost: <span className="font-semibold text-black">{average_cost}$</span>
                            </p>
                            <p className="">
                                Season: <span className="font-semibold text-black">{seasonality}</span>
                            </p>
                        </div>
                        <p className="">
                            Total Visitor: <span className="font-semibold text-black">{total_visitors_per_year}/year</span>
                        </p>
                    </div>
                    <hr className="my-5" />
                    <div className="flex items-center justify-between">
                        <p className="font-semibold">
                            Travel Time: <span className="text-success">{travel_time.split("").slice(0, 2).join("")} Days</span>
                        </p>
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
