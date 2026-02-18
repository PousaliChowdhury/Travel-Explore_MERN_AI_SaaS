import React, {useEffect} from 'react'
import './Popular.css'
import p10 from '../Assets/p10.jpg'
import p11 from '../Assets/p11.jpg'
import p12 from '../Assets/p12.jpg'
import p13 from '../Assets/p13.jpg'
import p14 from '../Assets/p14.jpg'
import p15 from '../Assets/p15.jpg'
import p16 from '../Assets/p16.jpg'
import p17 from '../Assets/p17.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom'



const Data = [
    {
        id:1,
        imgSrc: p10,
        destTitle: 'Dudhsagar Falls',
        location: 'Goa',
    },
    {
        id:2,
        imgSrc: p11,
        destTitle: 'Manali',
        location: 'Himachal Pradesh',
    },
    {
        id:3,
        imgSrc: p12,
        destTitle: 'Ellora Caves',
        location: 'Maharashtra',
    },
    {
        id:4,
        imgSrc: p13,
        destTitle: 'Ooty',
        location: 'Tamil Nadu',
    },
    {
        id:5,
        imgSrc: p14,
        destTitle: 'Dal Lake',
        location: 'Jammu And Kashmir',
    },
    {
        id:6,
        imgSrc: p15,
        destTitle: 'Golden Temple',
        location: 'Punjab',
    },
    {
        id:7,
        imgSrc: p16,
        destTitle: 'Darjeeling',
        location: 'West Bengal',
    },
    {
        id:8,
        imgSrc: p17,
        destTitle: 'Munnar',
        location: 'Kerala',
    },
]


const Popular = () => {
    useEffect(()=>{
        Aos.init({duration: 2000})
      }, [])

  return (
    <section className='popular section container'>
        <div className='secContainer'>


            <div className='secHeader flex'>
                <div data-aos="fade-right" data-aos-duration="2500" className='textDiv'>
                    <h2 className='secTitle'>
                        Popular Destinations Of India
                    </h2>
                    <p className='secSub'>
                    From historical cities to natural specteculars, come see the best of the India!
                    </p>
                </div>
            </div>


            <div className='mainContent grid'>
                {
                  Data.map(({id,imgSrc,destTitle,location})=>{
                    return(
                        <Link to="/Packages">
                        <div data-aos="fade-up" className='singleDestination'>
                    <div className='destImage'>
                        <img src={imgSrc} alt=' title' />
                        <div className='overlayInfo'>
                            <h3>{destTitle}</h3>
                            <p>
                               {location}
                            </p>
                        </div>
                    </div>
                    <div className='destFooter'>
                        <div className='number'>
                            0{id}
                        </div>
                        <div className='destText flex'>
                            <h6>
                                {location}
                            </h6>                
                        </div>
                    </div>
                        </div></Link>
                    )
                  })
                }
            </div>


        </div>
    </section>
  )
}


export default Popular
