import React, { useEffect, useState } from "react"
import CountriesCard from "../CountriesCard/CountriesCard"
import Loading from "../Loading/Loading"

const CountriesSection = () => {
    const [countriesData, setCountriesData] = useState([])
    // console.log(countriesData)
    const [load, setLoad] = useState(true)

    useEffect(() => {
        setLoad(true)
        fetch("https://maab-fw-assignment-10-server.vercel.app/countries")
            .then((res) => res.json())
            .then((data) => {
                // console.log(data)
                setCountriesData(data)
                setLoad(false)
            })
    }, [])

    if (load) return <Loading></Loading>

    return (
        <div className="my-24">
            <div className="text-center">
                <h2 className="text-3xl font-bold">Countries</h2>
                <p className="mt-3">Embark on your journey today and let the adventure unfold!</p>
            </div>
            <div className="mt-16 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {countriesData?.slice(0, 6).map((country) => (
                    <CountriesCard key={country._id} country={country}></CountriesCard>
                ))}
            </div>
        </div>
    )
}

export default CountriesSection
