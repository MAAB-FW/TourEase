import React from 'react';
import { Link } from 'react-router-dom';

const EmptyMsg = () => {
    return (
        <div>
            <div className="text-center text-3xl font-bold h-screen flex flex-col gap-7 items-center justify-center ">
                <p>
                    <span className="text-error">Oops!&#160;</span> No Data Found
                </p>
                <Link to="/add-tourists-spot" className="btn btn-success">
                    Add Tourists Spot
                </Link>
            </div>
        </div>
    );
};

export default EmptyMsg;