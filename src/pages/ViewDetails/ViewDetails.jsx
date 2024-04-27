import React from "react"
import { useLoaderData } from "react-router-dom"

const ViewDetails = () => {
    const loadedData = useLoaderData() || {}
    const {
        tourists_spot_name,
        image,
        country_name,
        location,
        short_description,
        average_cost,
        seasonality,
        travel_time,
        total_visitors_per_year,
    } = loadedData

    return (
        <div className="my-10 mb-20">
            <h2 className="text-center font-bold text-3xl my-8 text-info">Details</h2>
            <div className="p-5 h-full justify-between bg-base-100 shadow-xl">
                <div className="flex flex-col md:flex-row gap-5">
                    <figure>
                        <img className="rounded mx-auto max-w-1/2" src={image} alt={tourists_spot_name} />
                    </figure>
                    <div className=" my-4">
                        <h2 className="font-bold text-3xl">{tourists_spot_name}</h2>
                        <p className="mt-7"><span className="font-semibold">Location: </span>{location}</p>
                        <h2 className="text-right font-bold text-rose-600 text-xl">{country_name}</h2>
                        <p className="text-[#1f2937] mt-10 font-sans overflow-hidden text-wrap">
                            {short_description}
                        </p>
                    </div>
                </div>
                <hr className="my-6"/>
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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewDetails
