import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Source from "../components/Source";
import Caraousal from '../components/Caraousal'
import AIChat from "../components/AIChat";


function Packages (){
    return(
        <>
          <Navbar/>
          <AIChat/>
          <Caraousal/>
            <Source/>
          <Footer/>
        </>
    )
}


export default Packages;
