import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Pic from "../components/Pic";
import AIChat from "../components/AIChat";


function Gallery (){
    return(
        <>
          <Navbar/>
          <AIChat/>
            <Pic/>
          <Footer/>
        </>
    )
}


export default Gallery;
