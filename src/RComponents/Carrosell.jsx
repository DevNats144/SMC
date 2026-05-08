import Carousel from 'react-bootstrap/Carousel';
import logo from '../assets/Socialimg3.png';
import logo2 from '../assets/Socialimg9.png';
import logo3 from "../assets/Socialimg10.png";
import logo4 from "../assets/Socialimg11.png";






function CarouselFade() {
  return (
    <>
   <h1 style={{ width: "calc(100% + 10%)", marginLeft: "-10%", marginBottom: "18px", color: "white", margin: "10px 0 18px 0", backgroundColor: "#3038a8", borderRadius: "0", padding: "10px", fontSize: "30px", fontWeight: "bold", textAlign: "center", boxSizing: "border-box" }}>
     Portfólio Social Midea
   </h1>
   
    <div style={{ width: "90%", marginLeft: "5%", marginRight: "5%", marginBottom: "0px", padding: "0" }}>
        <Carousel fade>
        <Carousel.Item style={{display:'flex'}}>
            <img
            className=" d-block w-100 p-0 m-0"
            src={logo}
            alt="First slide"
            style={{ height: '100%', width: "100%", objectFit: "cover", borderRadius: '15px' }}
            />
           
        </Carousel.Item>



 <Carousel.Item>
            <img
            className=" d-block w-100 p-0 m-0"
            src={logo2}
            alt=" Third slide"
            style={{ height: '100%', width: "100%", objectFit: "cover", borderRadius: '15px' }}
            />
    
        </Carousel.Item>
        
         <Carousel.Item>
            <img
            className=" d-block w-100 p-0 m-0"
            src={logo3}
            alt="Fourth Slide"
            style={{ height: '100%', width: "100%", objectFit: "cover", borderRadius: '15px' }}
            />
 
        </Carousel.Item>

  <Carousel.Item>
            <img
            className=" d-block w-100 p-0 m-0"
            src={logo4}
            alt="Fith Slide"
            style={{ height: '100%', width: "100%", objectFit: "cover", borderRadius: '15px' }}
            />
    
        </Carousel.Item>

        </Carousel>
    </div>
    </>
  );
}


export default CarouselFade;