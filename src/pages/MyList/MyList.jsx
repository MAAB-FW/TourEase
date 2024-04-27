import React, { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../routes/AuthProvider/AuthProvider"
import EmptyMsg from "../../components/EmptyMsg/EmptyMsg"
import Loading from "../../components/Loading/Loading"
import { Link } from "react-router-dom"
import Swal from "sweetalert2"

const MyList = () => {
    const { user, loading, setLoading } = useContext(AuthContext)
    const [allData, setAllData] = useState([])

    useEffect(() => {
        // setLoading(true)
        fetch(`http://localhost:5000/my-list/${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setAllData(data)
                // setLoading(false)
            })
    }, [user, setLoading])

    const handleDelete = (id) => {
        console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/delete/${id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            const remaining = allData.filter((data) => data._id !== id)
                            setAllData(remaining)
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your data has been deleted.",
                                icon: "success",
                            })
                        }
                    })
            }
        })
    }

    if (loading) return <Loading></Loading>

    if (allData.length < 1) return <EmptyMsg></EmptyMsg>

    return (
        <div className="my-10 mb-20">
            <p className="text-center font-bold text-3xl my-8 text-info">My List({allData.length})</p>
            <div className="relative my- border flex flex-col bg-white md:w-full shadow-lg rounded-xl ">
                <div className="block w-full overflow-x-auto">
                    <table className="items-center bg-transparent w-full border-collapse ">
                        <thead>
                            <tr className="*:border-t-0 *:border-l-0 *:border-r-0">
                                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase whitespace-nowrap font-semibold text-left">
                                    Spot name
                                </th>
                                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase whitespace-nowrap font-semibold text-left">
                                    Location
                                </th>
                                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase whitespace-nowrap font-semibold text-left">
                                    Travel Time
                                </th>
                                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase whitespace-nowrap font-semibold text-center">
                                    Action
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {allData?.map((touristSpot) => (
                                <tr key={touristSpot._id} className="border-t">
                                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                                        {touristSpot.tourists_spot_name}
                                    </th>
                                    <td className=" px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                                        {touristSpot.location}
                                    </td>
                                    <td className=" px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        {touristSpot.travel_time} Days
                                    </td>
                                    <td className="flex flex-col *:btn-sm gap-4  px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        <Link to={`/update-page/${touristSpot._id}`} className="btn bg-warning">
                                            Update
                                        </Link>
                                        <button onClick={() => handleDelete(touristSpot._id)} className="btn bg-error text-white">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default MyList
