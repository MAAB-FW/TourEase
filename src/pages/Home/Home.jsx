import Banner from "../../components/Banner/Banner"
import TouristsSpots from "../../components/TouristsSpots/TouristsSpots"
import CountriesSection from "../../components/CountriesSection/CountriesSection"
import { useLoaderData } from "react-router-dom"

const Home = () => {
    const loadedAllData = useLoaderData() || {}
    return (
        <div>
            <Banner></Banner>
            <TouristsSpots loadedAllData={loadedAllData}></TouristsSpots>
            <CountriesSection></CountriesSection>
            {/* one extra */}
            {/* two extra */}
        </div>
    )
}

export default Home
