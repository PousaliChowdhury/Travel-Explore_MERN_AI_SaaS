import "./Suggest.css";
import abt1 from "../Assets/abt1.jpg";
import { Link } from 'react-router-dom'


const Suggest = () => {
  return (
    <>
    <div className="about_section">
      <div className="image_section">
        <img src={abt1} alt="About" className="about_img"/>
      </div>
      <div className="content_section">
        <div className="tag_section">
        </div>
          <h6 className="about_title">
            We Travel to explore the world!
          </h6>
          <p className="about_desc">
          <b>At Travel & Explore, we believe that travel should be sustainable and responsible. 
            We are committed to minimizing our impact on the environment and supporting local communities wherever we go. 
            We also believe in providing our customers with exceptional service every step of the way.
            Our mission is to make travel accessible and enjoyable for everyone</b>
          </p>
            <Link to="/Home" className='navlinks'><button className="btn about_btn bg_btn">
          Know more
            <i className="fa-solid fa-arrow-right"></i>
          </button> </Link>
        </div>
      </div>


    </>


  )
}
export default Suggest
