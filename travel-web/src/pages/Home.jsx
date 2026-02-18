import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Destination from "../components/Destination";
import Popular from "../components/Popular";
import Feature from "../components/Feature";
import Blog from "../components/Blog";
import Footer from "../components/Footer";
import AIChat from "../components/AIChat";


function Home (){
    return(
        <>
          <Navbar/>
          <AIChat/>
           <Hero/>
           <Destination/>
          <Popular/>
          <Feature/>
          <Blog/>
          <Footer/>
        </>
    )
}


export default Home;
