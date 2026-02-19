import React, {useEffect} from 'react'
import './Destination.css'
import p1 from '../Assets/p1.jpg'
import p2 from '../Assets/p2.jpg'
import p3 from '../Assets/p3.jpg'
import p4 from '../Assets/p4.jpg'
import p5 from '../Assets/p5.jpeg'
import p6 from '../Assets/p6.jpg'
import p7 from '../Assets/p7.jpg'
import p8 from '../Assets/p8.jpg'
import { Link } from 'react-router-dom'
import Aos from 'aos'
import 'aos/dist/aos.css'


const Data = [
    {
        id:1,
        imgSrc: p1,
        destTitle: 'Paris',
        location: 'France',
    },


    {
        id:2,
        imgSrc: p2,
        destTitle: 'Colosseum in Rome',
        location: 'Italy',
    },


    {
        id:3,
        imgSrc: p3,
        destTitle: 'Easter Island',
        location: 'Chile',
    },


    {
        id:4,
        imgSrc: p4,
        destTitle: 'Statue of Liberty',
        location: 'United States',
    },


    {
        id:5,
        imgSrc: p5,
        destTitle: 'Sigiriya',
        location: 'Sri Lanka',
    },
    {
        id:6,
        imgSrc: p6,
        destTitle: 'London',
        location: 'United Kingdom',
    },
    {
        id:7,
        imgSrc: p7,
        destTitle: 'Sydney',
        location: 'Australia',
    },
    {
        id:8,
        imgSrc: p8,
        destTitle: 'Great Sphinx Of Giza',
        location: 'Egypt',
    },
]


const Destination = () => {


    useEffect(()=>{
        Aos.init({duration: 2000})
      }, [])


  return (
    <section className='popular section container'>
        <div className='secContainer'>


            <div className='secHeader flex'>
                <div data-aos="fade-right" data-aos-duration="2500" className='textDiv'>
                    <h2 className='secTitle'>
                    Recommended Destinations Of World
                    </h2>
                    <p className='secSub'>
                    From historical cities to natural specteculars, come see the best of the world!
                    </p>
                </div>
            </div>


            <div className='mainContent grid'>
                {
                  Data.map(({id,imgSrc,destTitle,location})=>{
                    return(
                    <Link to="/Packages">   <div data-aos="fade-up" className='singleDestination'>
                    <div className='destImage'>

                    
                        <img src={imgSrc} alt='title' />


                        <div className='overlayInfo'>
                            <h3>{destTitle}</h3>
                            <p className='loc'>
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


export default Destination;
