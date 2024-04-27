import React from "react"

const CountriesSection = () => {
    return (
        <div className="my-24">
            <div className="text-center">
                <h2 className="text-3xl font-bold">Countries</h2>
                <p className="mt-3">Embark on your journey today and let the adventure unfold!</p>
            </div>
            <div className="mt-16 grid gap-6 grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
                {/* {allData?.slice(0, 6).map((touristSpot) => (
                    <SingleTouristCard key={touristSpot._id} touristSpot={touristSpot}></SingleTouristCard>
                ))} */}
            </div>
        </div>
    )
}

export default CountriesSection
