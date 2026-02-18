import React, {useEffect} from "react";
import './Footer.css'
import fb from '../Assets/fb.png'
import insta from '../Assets/insta.png'
import twitter from '../Assets/twitter.png'
import Aos from 'aos'
import 'aos/dist/aos.css'


const Footer=()=>{
    useEffect(()=>{
        Aos.init({duration: 2000})
      }, [])


    return(
        <>
           <div className="footer">
                <div className="sb_footer section_padding">
                        <div className="sb_footer-links">
                                <div className="sb_footer-links_div">
                                        <h4 data-aos="fade-up" data-aos-duration="2000">For Business</h4>
                                        <div className="link">
                                            <a href="/employer">
                                               <p data-aos="fade-up" data-aos-duration="3000">Employer</p>
                                            </a>
                                            <a href="/healthplan">
                                                <p data-aos="fade-up" data-aos-duration="3000">Health Plan</p>
                                            </a>
                                            <a href="/individual">
                                               <p data-aos="fade-up" data-aos-duration="3000">Individual</p>
                                            </a>
                                        </div>
                                </div>
                                            <div className="sb_footer-links_div">
                                            <h4 data-aos="fade-up" data-aos-duration="2000">Support</h4>
                                            <div className="links">
                                            <a href="/help">
                                                <p data-aos="fade-up" data-aos-duration="3000">Help Center</p>
                                            </a>
                                            <a href="/tweet">
                                                <p data-aos="fade-up" data-aos-duration="3000">Tweet @ Us</p>
                                            </a>
                                            <a href="/chatbot">
                                                <p data-aos="fade-up" data-aos-duration="3000">Live Chat Support</p>
                                            </a>
                                            <a href="/feedback">
                                                <p data-aos="fade-up" data-aos-duration="3000">Feedback</p>
                                            </a>
                                            </div>
                                            </div>
                                            <div className="sb_footer-links_div">
                                            <h4 data-aos="fade-up" data-aos-duration="2000">Contact Us</h4>
                                            <div className="contact">
                                            <a href="/email">
                                                <p data-aos="fade-up" data-aos-duration="3000">support@gmail.com</p>
                                            </a>
                                            </div>
                                            </div>
                                            <div className="sb_footer-links_div">
                                            <h4 data-aos="fade-up" data-aos-duration="2000">Follow us</h4>
                                            <div data-aos="fade-up" data-aos-duration="3000" className="socialmedia">
                                                <p><img src={fb} alt=""/></p>
                                                <p><img src={insta} alt=""/></p>
                                                <p><img src={twitter} alt=""/></p>
                                            </div>
                                            </div>
                        </div>


                                            <hr></hr>


                                        <div className="sb_footer-below">
                                            <div className="sb_footer-copyright">
                                                <p>
                                                    @{new Date().getFullYear()} CodeInn. All right reserved.
                                                </p>
                                            </div>
                                                    <div className="sb_footer-below_links">
                                                 <div className="terms"><a href="/terms"><div><p>Terms of Service</p></div></a> </div>
                                                 <div className="privacy"><a href="/privacy"><div><p>Privacy Policies</p></div></a>  </div>
                                                 <div className="faq"><a href="/faq"><div><p>FAQs</p></div></a> </div>
                                                  <div className="legal"><a href="/legal"><div><p>Legal</p></div></a> </div>
                                                    </div>
                                        </div>
                </div>
           </div> 
        </>
    )
}


export default Footer;
