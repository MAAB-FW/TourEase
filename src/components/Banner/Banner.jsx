import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { Pagination, Navigation, Autoplay } from "swiper/modules"

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
                                    Sundarban
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
                                    {/* &quot;Discover your&quot; */}
                                    Cox’s Bazar
                                    {/* <strong className="block font-extrabold text-primary"> Next adventure!</strong> */}
                                </h1>
                                <p className="mt-4 text-white max-w-lg sm:text-xl/relaxed">
                                    Immerse yourself in the breathtaking beauty of Cox’s Bazar, where golden sands stretch as far
                                    as the eye can see. Bask in the tranquility of pristine beaches and rejuvenate your soul
                                    amidst nature’s splendor.
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
                    <section className="relative h-[400px] md:h-[500px] bg-[url(https://img.freepik.com/free-photo/small-house-built-peaceful-green-hill-high-up-mountains_181624-8241.jpg?t=st=1714133645~exp=1714137245~hmac=241bda9a32d1ad960a2b877894d3cc625130c04fa4c5b72be5d88b335b3ef58b&w=740)] bg-cover bg-center bg-no-repeat">
                        <div className="absolute inset-0 bg-slate-700 opacity-45 //bg-white/75=sm:bg-transparent=sm:from-white/95=sm:to-white/25=ltr:sm:bg-gradient-to-r=rtl:sm:bg-gradient-to-l"></div>

                        <div className="relative mx-auto px-4 py-32 sm:px-6 lg:flex  lg:items-center lg:px-8">
                            <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                                <h1 className="text-3xl text-white font-extrabold sm:text-5xl">
                                    {/* &quot;Discover your&quot; */}
                                    Rangamati
                                    {/* <strong className="block font-extrabold text-primary"> Next adventure!</strong> */}
                                </h1>
                                <p className="mt-4 text-white max-w-lg sm:text-xl/relaxed">
                                    Discover the serene beauty of Rangamati, nestled amidst lush green hills and shimmering lakes.
                                    Explore indigenous culture, embark on scenic boat rides, and unwind in the lap of nature.
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
            </Swiper>
        </div>
    )
}

export default Banner
