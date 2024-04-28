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
                className={`relative overflow-hidden border rounded-lg bg-cover bg-no-repeat bg-center h-[400px]`}
            >
                <img className="object-cover w-full h-full rounded-t-lg" src={image} alt="" />
                <div
                    className={`absolute w-full top-0 flex flex-col justify-end h-full p-4 leading-normal rounded-lg
                    ${hover ? "bg-black bg-opacity-65 duration-500" : "duration-500"}`}
                >
                    <h5
                        className={`mb-2 absolute text-2xl font-bold tracking-tight text-white dark:text-white ${
                            hover ? "bottom-60 duration-500" : "bottom-0 duration-500"
                        }`}
                    >
                        {country_name}
                    </h5>
                    <p
                        className={`absolute top-40  mx-auto w-[90%] mb-3 font-normal text-white dark:text-gray-400 ${
                            hover ? "duration-500" : "duration-500 opacity-0"
                        }`}
                    >
                        {description}
                    </p>
                </div>
            </Link>
        </>
    )
}

export default CountriesCard
CountriesCard.propTypes = {
    country: PropTypes.object,
}
