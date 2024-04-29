import React, { useContext } from "react"
import { useForm } from "react-hook-form"
import toast from "react-hot-toast"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../routes/AuthProvider/AuthProvider"

const Register = () => {
    const { createUser, updateUser, logoutUser, setUser } = useContext(AuthContext)
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        const { name } = data
        const { photo } = data
        const { email } = data
        const { password } = data
        createUser(email, password)
            .then((r) => {
                console.log(r.user)
                toast.success("Successfully Registered!")
                updateUser(name, photo)
                    .then(() => {
                        navigate("/login")
                        logoutUser()
                            .then(() => {
                                setUser(null)
                            })
                            .catch((e) => {
                                console.log(e)
                                toast.error("An error Occur!")
                            })
                    })
                    .catch((e) => {
                        console.log(e)
                    })
            })
            .catch((e) => {
                console.log(e)
                toast.error("An error occur! Please try again later!")
            })
    }

    return (
        <div>
            <section className="bg-white dark:bg-gray-900 mb-12">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto  lg:py-12">
                    {/* <a href="/" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                        TourEase
                    </a> */}
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Register to your account
                            </h1>
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-6">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Full Name
                                    </label>
                                    <input
                                        {...register("name", {
                                            required: { value: true, message: "This field is required" },
                                        })}
                                        type="text"
                                        name="name"
                                        id="name"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Your Full Name"
                                    />
                                    <div>
                                        {errors.name && (
                                            <span className="text-red-600 text-sm font-semibold">{errors.name.message}</span>
                                        )}
                                    </div>
                                </div>
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Email
                                    </label>
                                    <input
                                        {...register("email", {
                                            required: { value: true, message: "This field is required" },
                                            pattern: {
                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                message: "Invalid email address",
                                            },
                                        })}
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Your Email address"
                                    />
                                    <div>
                                        {errors.email && (
                                            <span className="text-red-600 text-sm font-semibold">{errors.email.message}</span>
                                        )}
                                    </div>
                                </div>
                                <div>
                                    <label
                                        htmlFor="photo"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Photo URL
                                    </label>
                                    <input
                                        {...register("photo", {
                                            required: { value: true, message: "This field is required" },
                                        })}
                                        type="text"
                                        name="photo"
                                        id="photo"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Your PhotoURL"
                                    />
                                    <div>
                                        {errors.photo && (
                                            <span className="text-red-600 text-sm font-semibold">{errors.photo.message}</span>
                                        )}
                                    </div>
                                </div>
                                <div>
                                    <label
                                        htmlFor="password"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Password
                                    </label>
                                    <input
                                        {...register("password", {
                                            required: { value: true, message: "This field is required" },
                                            pattern: {
                                                value: /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/,
                                                message: "Password needs 1 uppercase, 1 lowercase, min. 6 chars.",
                                            },
                                        })}
                                        type="password"
                                        name="password"
                                        id="password"
                                        // placeholder="••••••••"
                                        placeholder="Your Password"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    />
                                    <div className="w-56">
                                        {errors.password && (
                                            <span className="text-red-600 text-sm font-semibold">{errors.password.message}</span>
                                        )}
                                    </div>
                                </div>
                                {/* <div className="flex items-center justify-between">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input
                                                id="remember"
                                                aria-describedby="remember"
                                                type="checkbox"
                                                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                                                required
                                            />
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">
                                                Remember me
                                            </label>
                                        </div>
                                    </div>
                                    <a
                                        href="#"
                                        className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                                    >
                                        Forgot password?
                                    </a>
                                </div> */}
                                <button type="submit" className="btn btn-block bg-info">
                                    Register
                                </button>
                            </form>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Already have an account?&#160;
                                <Link to="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                                    Login
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Register
