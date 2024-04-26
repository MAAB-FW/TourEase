import React, { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../routes/AuthProvider/AuthProvider"
import SingleTouristCard from "../../components/SingleTouristCard/SingleTouristCard"
import { Link } from "react-router-dom"

const MyList = () => {
    const { user } = useContext(AuthContext)
    const [allData, setAllData] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/my-list/${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setAllData(data)
            })
    }, [user])

    if (allData.length < 1)
        return (
            <div className="text-center text-3xl font-bold h-screen flex flex-col gap-7 items-center justify-center ">
                <p>
                    <span className="text-error">Oops!&#160;</span> No Data Found
                </p>
                <Link to="/add-tourists-spot" className="btn btn-success">
                    Add Tourists Spot
                </Link>
            </div>
        )

    return (
        <div>
            <div className="my-16 grid gap-6 grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
                <p>tabular form coming</p>
                {allData?.map((touristSpot) => (
                    <SingleTouristCard key={touristSpot._id}></SingleTouristCard>
                ))}
            </div>
        </div>
    )
}

export default MyList
