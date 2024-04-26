import React from 'react';
import Banner from '../../components/Banner/Banner';
import TouristsSpots from '../../components/TouristsSpots/TouristsSpots';
import CountriesSection from '../../components/CountriesSection/CountriesSection';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TouristsSpots></TouristsSpots>
            <CountriesSection></CountriesSection>
            {/* one extra */}
            {/* two extra */}
        </div>
    );
};

export default Home;