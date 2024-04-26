import React, { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../routes/AuthProvider/AuthProvider"
import SingleTouristCard from "../../components/SingleTouristCard/SingleTouristCard"
import EmptyMsg from "../../components/EmptyMsg/EmptyMsg"

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

    if (allData.length < 1) return <EmptyMsg></EmptyMsg>

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
