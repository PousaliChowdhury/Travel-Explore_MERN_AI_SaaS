import React, {useEffect} from 'react'
import './Hero.css';
import video from '../Assets/video.mp4'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom'


function Hero (){


  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])


    return(
        <div className='hero'>
          <video src={video} autoPlay loop muted type='video/mp4' />


          <div className="hero-text">
            <h1 data-aos="fade-up">Travel And Explore</h1>
            <p data-aos="fade-up" data-aos-duration="2500">Create memories with us..</p>
            <Link to="/Packages"><a data-aos="fade-up" data-aos-duration="3000" href="/" className='show'>
            Explore</a></Link>
          </div>
        </div>
    )
}
export default Hero;
