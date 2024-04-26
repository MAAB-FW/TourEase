import React from "react"

const SingleTouristCard = () => {
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure>
                    <img src="https://img.freepik.com/free-photo/beautiful-seaside-landscape_23-2150423925.jpg?t=st=1714135213~exp=1714138813~hmac=7fa424322290725b7e2bc857407b32a60557d22958128b73127e4b8443e7d68f&w=740" alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleTouristCard
