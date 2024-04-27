import React, { useContext } from "react"
import { AuthContext } from "../../routes/AuthProvider/AuthProvider"
import Swal from "sweetalert2"

const AddTouristsSpot = () => {
    const { user } = useContext(AuthContext)

    const handleAddTouristsSpot = (e) => {
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
        const user_email = user.email
        const user_name = user.displayName
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
            user_email,
            user_name,
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
                fetch("http://localhost:5000/add-tourists-spot", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                    },
                    body: JSON.stringify(touristsSpotData),
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data)
                        if (data.insertedId) {
                            form.reset()
                            Swal.fire({
                                title: "Success",
                                text: "Tourists Spot Successfully Added",
                                icon: "success",
                            })
                        }
                    })
            }
        })
    }

    return (
        <div className="my-10 mb-20">
            <h2 className="text-center font-bold text-3xl my-8 text-info">Add Tourists Spot</h2>
            <form onSubmit={handleAddTouristsSpot} className="w-full mx-auto border shadow-lg rounded-2xl p-8">
                <div className="flex flex-wrap mb-6">
                    <div className="w-full px-3 mb-6">
                        <label htmlFor="tourists_spot_name" className="block uppercase tracking-wide text-xs font-bold mb-2">
                            Tourist Spot Name
                        </label>
                        <input
                            name="tourists_spot_name"
                            id="tourists_spot_name"
                            type="text"
                            className="appearance-none block w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            placeholder="Enter tourist spot name"
                            required
                        />
                    </div>
                    <div className="w-full flex md:mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label htmlFor="image" className="block uppercase tracking-wide text-xs font-bold mb-2">
                                Image (URL)
                            </label>
                            <input
                                name="image"
                                id="image"
                                type="url"
                                className="appearance-none block w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                placeholder="Enter image URL"
                                required
                            />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label htmlFor="country_name" className="block uppercase tracking-wide text-xs font-bold mb-2">
                                Country Name
                            </label>
                            <select
                                name="country_name"
                                id="country_name"
                                className="appearance-none block w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                placeholder="Enter country name"
                                required
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
                            id="location"
                            type="text"
                            className="appearance-none block w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            placeholder="Enter location"
                            required
                        />
                    </div>
                    <div className="w-full px-3 mb-6">
                        <label htmlFor="short_description" className="block uppercase tracking-wide text-xs font-bold mb-2">
                            Short Description
                        </label>
                        <textarea
                            name="short_description"
                            id="short_description"
                            minLength={150}
                            className="resize-none appearance-none block w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            placeholder="Enter short description"
                            required
                        />
                    </div>
                    <div className="w-full px-3 mb-6 md:w-1/3">
                        <label htmlFor="average_cost" className="block uppercase tracking-wide text-xs font-bold mb-2">
                            Average Cost(USD)
                        </label>
                        <input
                            name="average_cost"
                            id="average_cost"
                            type="text"
                            className="appearance-none block w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            placeholder="Ex: 13,564"
                            required
                        />
                    </div>
                    <div className="w-full px-3 mb-6 md:w-1/3">
                        <label htmlFor="seasonality" className="block uppercase tracking-wide text-xs font-bold mb-2">
                            Seasonality
                        </label>
                        <select
                            name="seasonality"
                            id="seasonality"
                            className="appearance-none block w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        >
                            <option value="Summer">Summer</option>
                            <option value="Winter">Winter</option>
                        </select>
                    </div>
                    <div className="w-full px-3 mb-6 md:w-1/3">
                        <label htmlFor="travel_time" className="block uppercase tracking-wide text-xs font-bold mb-2">
                            Travel Time(Days)
                        </label>
                        <input
                            name="travel_time"
                            id="travel_time"
                            type="number"
                            className="appearance-none block w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            placeholder="Ex: 7"
                            required
                        />
                    </div>
                    <div className="w-full px-3 mb-6">
                        <label htmlFor="total_visitors_per_year" className="block uppercase tracking-wide text-xs font-bold mb-2">
                            Total Visitors Per Year
                        </label>
                        <input
                            name="total_visitors_per_year"
                            id="total_visitors_per_year"
                            type="text"
                            className="appearance-none block w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            placeholder="Ex: 199,456"
                            required
                        />
                    </div>
                    {/* <div className="w-full px-3 mb-6">
                        <label
                            htmlFor="user_email"
                            className="block uppercase tracking-wide text-xs font-bold mb-2"
                        >
                            User Email
                        </label>
                        <input
                            name="user_email"
                            id="user_email"
                            type="email"
                            className="appearance-none block w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            placeholder="Enter email"
                            required
                        />
                    </div>
                    <div className="w-full px-3 mb-6">
                        <label htmlFor="user_name" className="block uppercase tracking-wide text-xs font-bold mb-2">
                            User Name
                        </label>
                        <input
                            name="user_name"
                            id="user_name"
                            type="text"
                            className="appearance-none block w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            placeholder="Enter user name"
                            required
                        />
                    </div> */}
                </div>
                <div className="flex flex-wrap  mb-2">
                    <div className="w-full px-3">
                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold btn btn-block">
                            Add Tourist Spot
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AddTouristsSpot
