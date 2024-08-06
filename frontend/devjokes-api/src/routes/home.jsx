import Header from "../components/Header.jsx";
import Hero from "../components/Hero.jsx";
import EndpointTabs from "../components/EndpointTabs.jsx";
import EmbedJokes from "../components/EmbedJokes.jsx";
import VideoSection from "../components/VideoSection.jsx";
import Footer from "../components/Footer.jsx";

export default function Home() {
    return (
        <>
           <Header/>
            <Hero/>
            <EndpointTabs/>
            <EmbedJokes/>
            <VideoSection/>
            <Footer/>
        </>

    );
}