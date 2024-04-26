import React, { useContext } from "react"
import { useForm } from "react-hook-form"
import { FcGoogle } from "react-icons/fc"
import { RxGithubLogo } from "react-icons/rx"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { AuthContext } from "../../routes/AuthProvider/AuthProvider"
import toast from "react-hot-toast"

const Login = () => {
    const { loginUser, googleLogin, githubLogin } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    // console.log(loginUser)
    const onSubmit = (data) => {
        const { email } = data
        const { password } = data
        console.log(email, password)
        loginUser(email, password)
            .then((r) => {
                console.log(r.user)
                toast.success("Successfully Logged in!")
                navigate(location.state || "/")
            })
            .catch((e) => {
                console.log(e)
                toast.error("Incorrect email or password!")
            })
    }

    const handleGoogle = () => {
        googleLogin()
            .then((r) => {
                console.log(r)
                toast.success("Successfully Logged in!")
                navigate(location.state || "/")
            })
            .catch((e) => {
                console.log(e)
                toast.error("An error occur! Please try again later!")
            })
    }

    const handleGithub = () => {
        githubLogin()
            .then((r) => {
                console.log(r)
                toast.success("Successfully Logged in!")
                navigate(location.state || "/")
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
                                Login to your account
                            </h1>
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-6">
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
                                    Login
                                </button>
                            </form>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Don’t have an account yet?&#160;
                                <Link
                                    to="/register"
                                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                                >
                                    Register
                                </Link>
                            </p>

                            <div className="w-full flex flex-col justify-center gap-4">
                                <button
                                    onClick={handleGoogle}
                                    className="flex items-center justify-center bg-white border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                                >
                                    <FcGoogle className="text-2xl mr-4" />
                                    <span>Log in With Google account</span>
                                </button>
                                <button
                                    onClick={handleGithub}
                                    className="flex items-center justify-center bg-white border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                                >
                                    <RxGithubLogo className="text-2xl mr-4" />
                                    <span>Log in With Github account</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Login
