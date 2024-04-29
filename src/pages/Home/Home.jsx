import Banner from "../../components/Banner/Banner"
import TouristsSpots from "../../components/TouristsSpots/TouristsSpots"
import CountriesSection from "../../components/CountriesSection/CountriesSection"
import ContactUs from "../../components/ContactUs/ContactUs"
// import { useLoaderData } from "react-router-dom"

const Home = () => {
    // const loadedAllData = useLoaderData() || {}
    return (
        <div>
            <Banner></Banner>
            <TouristsSpots></TouristsSpots>
            <CountriesSection></CountriesSection>
            {/* one extra */}
            <ContactUs></ContactUs>
            {/* two extra */}
        </div>
    )
}

export default Home
