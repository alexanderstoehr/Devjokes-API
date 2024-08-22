import Header from "../components/sections/Header.jsx";
import Hero from "../components/sections/Hero.jsx";
import EndpointTabs from "../components/sections/EndpointTabs.jsx";
import EmbedJokes from "../components/sections/EmbedJokes.jsx";
import VideoSection from "../components/sections/VideoSection.jsx";
import Footer from "../components/sections/Footer.jsx";
import {MainContentStyled} from "../styles/globalStyles.js";

export default function Home() {
    return (
        <MainContentStyled>
            <Header/>
            <Hero/>
            <EndpointTabs/>
            <EmbedJokes/>
            <VideoSection/>
            <Footer/>
        </MainContentStyled>

    );
}