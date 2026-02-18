import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './Refer.css';
import fa1 from '../Assets/fa1.jpeg'
import fa2 from '../Assets/fa2.jpeg'
import fa3 from '../Assets/fa3.jpeg'
import fa4 from '../Assets/fa4.jpeg'
import fa5 from '../Assets/fa5.jpeg'
import fa6 from '../Assets/fa6.jpeg'
import { Pagination, Autoplay} from 'swiper/modules';


export default function Refer() {
  return (
    <>
   
    <div className='review'>
      <div className='container'>
        <div className='headings'>
        <h2 className='title'>What Our Clients say</h2>
        </div>
        <Swiper
        slidesPerView={'auto'}
        centeredSlides={true}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
        >
        <div className='content'>
        <div className='slider'>
          <div className='swipe'>
          <SwiperSlide>
            <div className='items'>
              <div className='client-info'>
                <img src={fa1} alt='client review'/>
                <h3 className='name'>Aman Arora</h3>
                <span className='job'>Entrepreneur</span>
              </div>
              <div className='rate'>
                <i className='fa fa-star'></i>
                <i className='fa fa-star'></i>
                <i className='fa fa-star'></i>
                <i className='fa fa-star'></i>
                <i className='fa fa-star'></i>
              </div>
              <div className='swiper-client-msg'>
                <p>Travel And Explore is my go-to travel companion. The website's simplicity and inspiring content make planning a trip a joy. Kudos to the team for creating a seamless experience!</p>
              </div>
           </div>
           </SwiperSlide>
           <SwiperSlide>
            <div className='items'>
              <div className='client-info'>
                <img src={fa4} alt='client review'/>
                <h3 className='name'>Arika Park</h3>
                <span className='job'>Software Engineer</span>
              </div>
              <div className='rate'>
                <i className='fa fa-star'></i>
                <i className='fa fa-star'></i>
                <i className='fa fa-star'></i>
                <i className='fa fa-star'></i>
                <i className='fa fa-star'></i>
              </div>
              <div className='swiper-client-msg'>
                <p>I recently discovered Travel And Explore, and it's become my go-to for travel inspiration. The concise destination insights and beautiful visuals ignite the desire to explore new places. Highly recommended!</p>
              </div>
           </div>
           </SwiperSlide>
           <SwiperSlide>
            <div className='items'>
              <div className='client-info'>
                <img src={fa2} alt='client review'/>
                <h3 className='name'>John Doe</h3>
                <span className='job'>Doctor</span>
              </div>
              <div className='rate'>
                <i className='fa fa-star'></i>
                <i className='fa fa-star'></i>
                <i className='fa fa-star'></i>
                <i className='fa fa-star'></i>
                <i className='fa fa-star'></i>
              </div>
              <div className='swiper-client-msg'>
                <p>Thumbs up to Travel And Explore! The website's design is intuitive, and the booking process is straightforward. It's refreshing to find a travel platform that truly understands and caters to the needs of travelers.</p>
              </div>
           </div>
           </SwiperSlide>
           <SwiperSlide>
            <div className='items'>
              <div className='client-info'>
                <img src={fa3} alt='client review'/>
                <h3 className='name'>Suzy Triffany</h3>
                <span className='job'>Fashion Designer</span>
              </div>
              <div className='rate'>
                <i className='fa fa-star'></i>
                <i className='fa fa-star'></i>
                <i className='fa fa-star'></i>
                <i className='fa fa-star'></i>
                <i className='fa fa-star'></i>
              </div>
              <div className='swiper-client-msg'>
                <p>I love how Travel And Explore combines practical information with a touch of wanderlust. The booking process is smooth, and the community engagement adds a delightful sense of shared adventure.</p>
              </div>
           </div>
           </SwiperSlide>
           <SwiperSlide>
            <div className='items'>
              <div className='client-info'>
                <img src={fa5} alt='client review'/>
                <h3 className='name'>Anamika Roy</h3>
                <span className='job'>Professor</span>
              </div>
              <div className='rate'>
                <i className='fa fa-star'></i>
                <i className='fa fa-star'></i>
                <i className='fa fa-star'></i>
                <i className='fa fa-star'></i>
                <i className='fa fa-star'></i>
              </div>
              <div className='swiper-client-msg'>
                <p>Travel And Explore has become my virtual travel buddy. The website's practical tips, seamless booking process, and community engagement make it stand out. A reliable resource for any travel enthusiast.</p>
              </div>
           </div>
           </SwiperSlide>
           <SwiperSlide>
            <div className='items'>
              <div className='client-info'>
                <img src={fa6} alt='client review'/>
                <h3 className='name'>Marc Kim</h3>
                <span className='job'>Photographer</span>
              </div>
              <div className='rate'>
                <i className='fa fa-star'></i>
                <i className='fa fa-star'></i>
                <i className='fa fa-star'></i>
                <i className='fa fa-star'></i>
                <i className='fa fa-star'></i>
              </div>
              <div className='swiper-client-msg'>
                <p>Navigating Travel And Explore is a pleasure. The website's layout is user-friendly, and the travel guides are both informative and captivating. A top-notch resource for any globetrotter!</p>
              </div>
           </div>
           </SwiperSlide>
          </div>
        </div>
          <div class="swiper-pagination"></div>
        </div>
        </Swiper>

    </div>
    </div>
     
    </>
  );
}
