import React from "react"

const AddTouristsSpot = () => {
    return (
        <div className="my-10">
            <h2 className="text-center font-bold text-3xl mb-6 text-info">AddTouristsSpot</h2>
            <form className="w-full mx-auto border shadow-lg rounded-2xl p-8">
                <div className="flex flex-wrap mb-6">
                    <div className="w-full px-3 mb-6">
                        <label htmlFor="tourists_spot_name" className="block uppercase tracking-wide text-xs font-bold mb-2">
                            Tourist Spot Name
                        </label>
                        <input
                            name="tourists_spot_name"
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
                                type="url"
                                className="appearance-none block w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                placeholder="Enter image URL"
                            />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label htmlFor="country_name" className="block uppercase tracking-wide text-xs font-bold mb-2">
                                Country Name
                            </label>
                            <input
                                name="country_name"
                                type="text"
                                className="appearance-none block w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                placeholder="Enter country name"
                            />
                        </div>
                    </div>
                    <div className="w-full px-3 mb-6">
                        <label htmlFor="location" className="block uppercase tracking-wide text-xs font-bold mb-2">
                            Location
                        </label>
                        <input
                            name="location"
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
                            className="resize-none appearance-none block w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            placeholder="Enter short description"
                        />
                    </div>
                    <div className="w-full px-3 mb-6 md:w-1/3">
                        <label htmlFor="average_cost" className="block uppercase tracking-wide text-xs font-bold mb-2">
                            Average Cost
                        </label>
                        <input
                            name="average_cost"
                            type="number"
                            className="appearance-none block w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            placeholder="Enter average cost"
                        />
                    </div>
                    <div className="w-full px-3 mb-6 md:w-1/3">
                        <label htmlFor="seasonality" className="block uppercase tracking-wide text-xs font-bold mb-2">
                            Seasonality
                        </label>
                        <select
                            name="seasonality"
                            className="appearance-none block w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        >
                            <option value="summer">Summer</option>
                            <option value="winter">Winter</option>
                        </select>
                    </div>
                    <div className="w-full px-3 mb-6 md:w-1/3">
                        <label htmlFor="travel_time" className="block uppercase tracking-wide text-xs font-bold mb-2">
                            Travel Time
                        </label>
                        <input
                            name="travel_time"
                            type="text"
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
                            type="number"
                            className="appearance-none block w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            placeholder="Enter total visitors per year"
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
                            type="email"
                            className="appearance-none block w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            placeholder="Enter email"
                        />
                    </div>
                    <div className="w-full px-3 mb-6">
                        <label htmlFor="user_name" className="block uppercase tracking-wide text-xs font-bold mb-2">
                            User Name
                        </label>
                        <input
                            name="user_name"
                            type="text"
                            className="appearance-none block w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            placeholder="Enter user name"
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
