import React, { useState } from "react"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"

const CountriesCard = ({ country }) => {
    const { image, country_name, description } = country
    const [hover, setHover] = useState(false)

    return (
        <>
            <Link
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                to={`/countries/${country_name}`}
                className={`relative overflow-hidden border rounded-lg bg-[url(${image})] bg-cover bg-no-repeat bg-center h-[400px]`}
            >
                {/* <img className="object-cover w-full rounded-t-lg" src={image} alt="" /> */}
                <div
                    className={`flex flex-col h-full p-4 leading-normal rounded-lg
                    ${hover ? "bg-black bg-opacity-65" : ""}`}
                >
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">{country_name}</h5>
                    <p className={`mb-3 font-normal text-white dark:text-gray-400 ${hover ? "" : "hidden"}`}>{description}</p>
                </div>
            </Link>
        </>
    )
}

export default CountriesCard
CountriesCard.propTypes = {
    country: PropTypes.object,
}
