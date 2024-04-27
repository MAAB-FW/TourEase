import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { Pagination, Navigation, Autoplay } from "swiper/modules"
import { Typewriter } from "react-simple-typewriter"

const Banner = () => {
    return (
        <div className="my-7">
            <Swiper
                pagination={{
                    type: "fraction",
                }}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                // navigation={true}
                modules={[Pagination, Navigation, Autoplay]}
                className="mySwiper text-white rounded-2xl"
            >
                {/* <SwiperSlide className="md:h-[539px] relative">
                    <div className="h-[300px] md:h-[539px] bg-[url('')] bg-no-repeat bg-center bg-cover">
                        <div className="absolute  flex items-center w-full h-full justify-start">
                            <h2 className=" text-white font-bold text-center text-7xl">Sundarban</h2>
                        </div>
                        <div className="w-full h-full bg-[#242c36] opacity-20"></div>
                    </div>
                </SwiperSlide> */}
                <SwiperSlide>
                    <section className="relative h-[400px] md:h-[500px] bg-[url(https://img.freepik.com/premium-photo/beautiful-wetland-sicao-mangrove-green-tunnel_167709-96.jpg?w=740)] bg-cover bg-center bg-no-repeat">
                        <div className="absolute inset-0 bg-slate-700 opacity-45 //bg-white/75=sm:bg-transparent=sm:from-white/95=sm:to-white/25=ltr:sm:bg-gradient-to-r=rtl:sm:bg-gradient-to-l"></div>

                        <div className="relative mx-auto px-4 py-32 sm:px-6 lg:flex  lg:items-center lg:px-8">
                            <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                                <h1 className="text-3xl text-white font-extrabold sm:text-5xl">
                                    {/* &quot;Discover your&quot; */}
                                    <Typewriter
                                        words={["Unravel", "the Mysteries", "of the", "Sundarbans"]}
                                        loop={true}
                                        cursor={true}
                                        cursorStyle={"_"}
                                    />
                                    {/* <strong className="block font-extrabold text-primary"> Next adventure!</strong> */}
                                </h1>
                                <p className="mt-4 text-white max-w-lg sm:text-xl/relaxed">
                                    Uncover the secrets of the Sundarbans, a land of legends and folklore. From its mystical
                                    mangrove maze to its hidden treasures, every corner holds a story waiting to be told.
                                </p>
                                {/* <div className="mt-8 flex flex-wrap gap-4 text-center">
                                    <a
                                        href="#"
                                        className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                                    >
                                        Get Started
                                    </a>

                                    <a
                                        href="#"
                                        className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
                                    >
                                        Learn More
                                    </a>
                                </div> */}
                            </div>
                        </div>
                    </section>
                </SwiperSlide>
                <SwiperSlide>
                    <section className="relative h-[400px] md:h-[500px] bg-[url(https://img.freepik.com/free-photo/beautiful-tropical-beach-sea_74190-6716.jpg?t=st=1714133171~exp=1714136771~hmac=586416a2c319e92aea1859efa19f0c8b2d1f2ff9daff9abd4f015aa32d602fb7&w=740)] bg-cover bg-center bg-no-repeat">
                        <div className="absolute inset-0 bg-slate-700 opacity-45 //bg-white/75=sm:bg-transparent=sm:from-white/95=sm:to-white/25=ltr:sm:bg-gradient-to-r=rtl:sm:bg-gradient-to-l"></div>

                        <div className="relative mx-auto px-4 py-32 sm:px-6 lg:flex  lg:items-center lg:px-8">
                            <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                                <h1 className="text-3xl text-white font-extrabold sm:text-5xl">
                                    <Typewriter
                                        words={["Uncover", "the Magic", "of Bangkok"]}
                                        loop={true}
                                        cursor={true}
                                        cursorStyle={"_"}
                                    />
                                </h1>
                                <p className="mt-4 text-white max-w-lg sm:text-xl/relaxed">
                                    Step into a world of wonder in Bangkok, where gleaming temples, bustling markets, and serene
                                    canals create a tapestry of experiences waiting to be explored.
                                </p>
                            </div>
                        </div>
                    </section>
                </SwiperSlide>
                <SwiperSlide>
                    <section className="relative h-[400px] md:h-[500px] bg-[url(https://img.freepik.com/free-photo/beautiful-seaside-landscape_23-2150423925.jpg?t=st=1714135213~exp=1714138813~hmac=7fa424322290725b7e2bc857407b32a60557d22958128b73127e4b8443e7d68f&w=740)] bg-cover bg-center bg-no-repeat">
                        <div className="absolute inset-0 bg-slate-700 opacity-45 //bg-white/75=sm:bg-transparent=sm:from-white/95=sm:to-white/25=ltr:sm:bg-gradient-to-r=rtl:sm:bg-gradient-to-l"></div>

                        <div className="relative mx-auto px-4 py-32 sm:px-6 lg:flex  lg:items-center lg:px-8">
                            <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                                <h1 className="text-3xl text-white font-extrabold sm:text-5xl">
                                    <Typewriter
                                        words={["Langkawi:", "Gateway to", "Adventure"]}
                                        loop={true}
                                        cursor={true}
                                        cursorStyle={"_"}
                                    />
                                </h1>
                                <p className="mt-4 text-white max-w-lg sm:text-xl/relaxed">
                                    Experience the thrill of Langkawi's outdoor adventures, from zip-lining through the rainforest
                                    canopy to snorkeling in vibrant coral reefs.
                                </p>
                            </div>
                        </div>
                    </section>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Banner
