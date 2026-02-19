import {useEffect} from 'react'
import './Feature.css'
import { Link } from 'react-router-dom'
import bestprice from '../Assets/bestprice.png'
import travel from '../Assets/travel.png'
import insurance from '../Assets/insurance.png'
import Aos from 'aos'
import 'aos/dist/aos.css'


const Feature = () => {
    useEffect(()=>{
        Aos.init({duration: 2000})
      }, [])

  return (
    <section className='about section'>
        <div className='secContainer'>
            <h2 data-aos="fade-up" data-aos-duration="2000" className='title'>
                Why Choose Us?
            </h2>


            <div className='mainContent container grid'>
                <div data-aos="fade-up" data-aos-duration="2000" className='singleItem'>
                    <img src={bestprice} alt="Name" />
                    <h3>Transparent Pricing</h3>
            <p>
              Starting prices shown clearly. Customize hotels, transport,
              meals, and activities — pay only for what you choose.
            </p>


                </div>


                <div data-aos="fade-up" data-aos-duration="2500" className='singleItem'>
                    <img src={travel} alt="Name" />


                    <h3>Customised Packages</h3>
            <p>
              Solo, couple, family, or group tours — build your trip your way
              with flexible options and personalised planning.
            </p>


                </div>


                <div data-aos="fade-up" data-aos-duration="3000" className='singleItem'>
                    <img src={insurance} alt="Name" />


                    <h3>Worry free Travel Security</h3>
            <p>
              Optional travel insurance, support during trips, and reliable
              bookings for complete peace of mind.
            </p>


                </div>
            </div>


<Link to="/Packages">

            <div className='videoCard container'>
                <div className='cardContent grid'>
                


                    <div data-aos="fade-right" data-aos-duration="2000" className='cardText'>
                    <h2>Design Your Perfect Trip</h2>
                    <p>
                        Choose your destination, customise your package, and book
                  confidently — all in one place. Keep travelling, explore new places & experience the ultimate adventure with us.
                    </p>
                </div>
              


                <div data-aos="fade-left" data-aos-duration="2000" className='cardVideo'>
                    <video src="https://www.pexels.com/download/video/16296844/" autoPlay loop muted />
                </div>
            </div>
            </div> </Link>
        </div>
    </section>
  )
}


export default Feature;
