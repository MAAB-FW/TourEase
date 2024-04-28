import React, { useState } from "react"
import { useLoaderData } from "react-router-dom"
import Swal from "sweetalert2"

const UpdatePage = () => {
    const loadedData = useLoaderData() || {}

    const [singleData, setSingleData] = useState(loadedData)

    const handleUpdateTouristsSpot = (e) => {
        e.preventDefault()
        const form = e.target
        const tourists_spot_name = form.tourists_spot_name.value
        const image = form.image.value
        const country_name = form.country_name.value
        const location = form.location.value
        const short_description = form.short_description.value
        const average_cost = form.average_cost.value
        const seasonality = form.seasonality.value
        const travel_time = form.travel_time.value
        const total_visitors_per_year = form.total_visitors_per_year.value
        const touristsSpotData = {
            tourists_spot_name,
            image,
            country_name,
            location,
            short_description,
            average_cost,
            seasonality,
            travel_time,
            total_visitors_per_year,
        }
        console.log(touristsSpotData)
        Swal.fire({
            title: "All data are correct?",
            // text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://maab-fw-assignment-10-server.vercel.app/update/${singleData._id}`, {
                    method: "PATCH",
                    headers: {
                        "content-type": "application/json",
                    },
                    body: JSON.stringify(touristsSpotData),
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data)
                        if (data.modifiedCount > 0) {
                            setSingleData(touristsSpotData)
                            Swal.fire({
                                title: "Success",
                                text: "Tourists Spot Successfully Updated",
                                icon: "success",
                            })
                        }
                    })
            }
        })
    }

    return (
        <div className="my-10 mb-20">
            <h2 className="text-center font-bold text-lg md:text-3xl my-8 text-info">Update Tourists Spot Info</h2>
            <form onSubmit={handleUpdateTouristsSpot} className="w-full mx-auto border shadow-lg rounded-2xl p-8">
                <div className="flex flex-wrap mb-6">
                    <div className="w-full px-3 mb-6">
                        <label htmlFor="tourists_spot_name" className="block uppercase tracking-wide text-xs font-bold mb-2">
                            Tourist Spot Name
                        </label>
                        <input
                            name="tourists_spot_name"
                            defaultValue={singleData.tourists_spot_name}
                            id="tourists_spot_name"
                            type="text"
                            className="appearance-none block w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            placeholder="Enter tourist spot name"
                        />
                    </div>
                    <div className="w-full flex md:mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label htmlFor="image" className="block uppercase tracking-wide text-xs font-bold mb-2">
                                Image (URL)
                            </label>
                            <input
                                name="image"
                                defaultValue={singleData.image}
                                id="image"
                                type="url"
                                className="appearance-none block w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                placeholder="Enter image URL"
                            />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label htmlFor="country_name" className="block uppercase tracking-wide text-xs font-bold mb-2">
                                Country Name
                            </label>
                            <select
                                name="country_name"
                                defaultValue={singleData.country_name}
                                id="country_name"
                                className="appearance-none block w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                placeholder="Enter country name"
                            >
                                <option value="Bangladesh">Bangladesh</option>
                                <option value="Thailand">Thailand</option>
                                <option value="Indonesia">Indonesia</option>
                                <option value="Malaysia">Malaysia</option>
                                <option value="Vietnam">Vietnam</option>
                                <option value="Cambodia">Cambodia</option>
                            </select>
                        </div>
                    </div>
                    <div className="w-full px-3 mb-6">
                        <label htmlFor="location" className="block uppercase tracking-wide text-xs font-bold mb-2">
                            Location
                        </label>
                        <input
                            name="location"
                            defaultValue={singleData.location}
                            id="location"
                            type="text"
                            className="appearance-none block w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            placeholder="Enter location"
                        />
                    </div>
                    <div className="w-full px-3 mb-6">
                        <label htmlFor="short_description" className="block uppercase tracking-wide text-xs font-bold mb-2">
                            Short Description
                        </label>
                        <textarea
                            name="short_description"
                            defaultValue={singleData.short_description}
                            id="short_description"
                            className="resize-none appearance-none block w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            placeholder="Enter short description"
                        />
                    </div>
                    <div className="w-full px-3 mb-6 md:w-1/3">
                        <label htmlFor="average_cost" className="block uppercase tracking-wide text-xs font-bold mb-2">
                            Average Cost(USD)
                        </label>
                        <input
                            name="average_cost"
                            defaultValue={singleData.average_cost}
                            id="average_cost"
                            type="number"
                            className="appearance-none block w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            placeholder="13564"
                        />
                    </div>
                    <div className="w-full px-3 mb-6 md:w-1/3">
                        <label htmlFor="seasonality" className="block uppercase tracking-wide text-xs font-bold mb-2">
                            Seasonality
                        </label>
                        <select
                            name="seasonality"
                            defaultValue={singleData.seasonality}
                            id="seasonality"
                            className="appearance-none block w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        >
                            <option value="Summer">Summer</option>
                            <option value="Winter">Winter</option>
                        </select>
                    </div>
                    <div className="w-full px-3 mb-6 md:w-1/3">
                        <label htmlFor="travel_time" className="block uppercase tracking-wide text-xs font-bold mb-2">
                            Travel Time
                        </label>
                        <input
                            name="travel_time"
                            defaultValue={singleData.travel_time}
                            id="travel_time"
                            type="number"
                            className="appearance-none block w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            placeholder="7 days"
                        />
                    </div>
                    <div className="w-full px-3 mb-6">
                        <label htmlFor="total_visitors_per_year" className="block uppercase tracking-wide text-xs font-bold mb-2">
                            Total Visitors Per Year
                        </label>
                        <input
                            name="total_visitors_per_year"
                            defaultValue={singleData.total_visitors_per_year}
                            id="total_visitors_per_year"
                            type="text"
                            className="appearance-none block w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            placeholder="Ex: 199,456"
                        />
                    </div>
                </div>
                <div className="flex flex-wrap  mb-2">
                    <div className="w-full px-3">
                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold btn btn-block">
                            Update Tourist Spot
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default UpdatePage
