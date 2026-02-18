import Carousel from 'react-bootstrap/Carousel';
import image1 from '../Assets/image1.png';
import image2 from '../Assets/image2.png';
import image3 from '../Assets/image3.png';
import image4 from '../Assets/image4.png';
import image5 from '../Assets/image5.png';
import image6 from '../Assets/image6.png';


function Caraousal() {
    return(
      <div >
       <Carousel data-bs-theme="dark" indicators={false} controls={false}
       style={{marginTop:'-20px', marginBottom:'-5px', zIndex:'-1'}}>
      <Carousel.Item>
        <img style={{height: '800px',width:'100%',minHeight: "300px", maxHeight: "700px",}}
          src={image1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5 style={{padding:'5px',color:'white'}}>Adventure & Trekking</h5>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height: '800px',width:'100%',minHeight: "300px", maxHeight: "700px",}}
          src={image2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5  style={{padding:'5px',color:'black'}}>Scenic Beauty of Beachside</h5>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height: '800px',width:'100%',minHeight: "300px", maxHeight: "700px",}}
          src={image3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5  style={{padding:'5px',color:'black'}}>Historical & Heritage sites</h5>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height: '800px',width:'100%',minHeight: "300px", maxHeight: "700px",}}
          src={image4}
          alt="Fourth slide"
        />
        <Carousel.Caption>
          <h5  style={{padding:'5px',color:'black'}}>Explore Hillstations</h5>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height: '800px',width:'100%',minHeight: "300px", maxHeight: "700px",}}
          src={image5}
          alt="Fifth slide"
        />
        <Carousel.Caption>
          <h5  style={{padding:'5px',color:'white'}}>Amazing Wildlife Scenes</h5>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height: '800px',width:'100%',minHeight: "300px", maxHeight: "700px",}}
          src={image6}
          alt="sixth slide"
        />
        <Carousel.Caption>
          <h5  style={{padding:'5px',color:'white'}}>Famous Pilgrimage Tour</h5>
         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      </div>
    )
}
export default  Caraousal ;
