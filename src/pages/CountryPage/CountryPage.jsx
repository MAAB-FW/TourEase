import React from "react"
import { useLoaderData, useParams } from "react-router-dom"
import EmptyMsg from "../../components/EmptyMsg/EmptyMsg"
import SingleCountryCard from "../../components/SingleCountryCard/SingleCountryCard"

const CountryPage = () => {
    const loadedFilterData = useLoaderData() || []
    const { id } = useParams()
    console.log(loadedFilterData)

    if (loadedFilterData < 1) return <EmptyMsg></EmptyMsg>

    return (
        <div className="my-10 mb-20">
            <h2 className="text-center font-bold text-lg md:text-3xl my-8 text-info">
                <span className="text-[#0096ac]">{id}&apos;s</span> Tourists Spots
            </h2>
            <div className="grid gap-6  grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {loadedFilterData?.map((touristSpot) => (
                    <SingleCountryCard key={touristSpot._id} touristSpot={touristSpot}></SingleCountryCard>
                ))}
            </div>
        </div>
    )
}

export default CountryPage
