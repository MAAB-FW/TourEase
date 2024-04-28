import React from "react"
import { useLoaderData } from "react-router-dom"

const CountryPage = () => {
    const loadedFilterData = useLoaderData() || []
    console.log(loadedFilterData)

    return (
        <div className="my-10 mb-20">
            <h2 className="text-center font-bold text-lg md:text-3xl my-8 text-info">Countries Tourists Spots</h2>
            
        </div>
    )
}

export default CountryPage
