import React, {useEffect} from 'react'
import './Blog.css'
import Tun from '../Assets/Tun.jpg'
import Mor from '../Assets/Mor.jpg'
import Ken from '../Assets/Ken.jpg'
import Jap from '../Assets/Jap.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'



const Posts = [
    {
        id:1,
        postImage: Tun,
        title: 'Let us have an adventure outside Tunisia',
        desc: 'Tunisia is a small Arab country in North Africa that represents both the aspirants of freedom and struggles against terrorism that roil the region',
    },
    {
        id:2,
        postImage: Mor,
        title: 'Beautiful Morocco, let us travel!',
        desc: 'The Kingdom of Morocco is a Muslim country in western North Africa, with coastlines on the Atlantic Ocean and Mediterranean Sea.',
    },
    {
        id:3,
        postImage: Ken,
        title: 'Best Country in East Africa',
        desc: 'When Kenya claimed its independence from the U.K. in 1963, leaders of the newly formed republic promoted a sense of national unity using the motto.',
    },
    {
        id:4,
        postImage: Jap,
        title: 'Amazing sights of Hokkaido, Japan',
        desc: "Japan's great white north offers wild, white winters and bountifull summers-a heaven for dedicated foodies, nature lovers and outdoor adventure fans seeking anadrenaline rush.",
    },
]


const Blog = () => {
    useEffect(()=>{
        Aos.init({duration: 2000})
      }, [])


  return (
    <section className='blog container section'>
        <div className='secContainer'>




            <div className='secIntro'>
                <h2 data-aos="fade-up" data-aos-duration="2000" className='secTitle'>
                    Our Best Blog?
                </h2>
                <p data-aos="fade-up" data-aos-duration="2500">
                    An insight to the incredible experience in the world.
                </p>
            </div>


            <div className='mainContainer grid'>
                {
                    Posts.map(({id, postImage, title, desc})=>{
                        return(
                            <div data-aos="fade-up" data-aos-duration="2000" className='singlePost grid'>
                            <div className='imgDiv'>
                               <img src={postImage} alt={title} />
                            </div>




                    <div className='postDetails'>
                        <h3 data-aos="fade-up" data-aos-duration="3000">
                           {title}
                        </h3>
                        <p data-aos="fade-up" data-aos-duration="4000">
                            {desc}
                        </p>
                    </div>


                    <a className='flex' data-aos="fade-up" data-aos-duration="4500" href="/Packages">Read More</a>
                    </div>
                        )
                    })
                }


            </div>
        </div>
    </section>
  )
}


export default Blog
