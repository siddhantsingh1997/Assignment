import React from "react";
import Carousel from "react-bootstrap/Carousel";



function Slider({sData}) {
 const renderCarousel=(image,index)=>{
   //console.log("wafwqf"+image.Poster);
   return(
   <Carousel.Item  key={index}>
    <img
      className="d-block w-100"
      src={image.Poster}
      alt="First slide"
      style={{height:"300px"}}
     
    />
  </Carousel.Item>
   );
 }

    return(
      
        
<Carousel>
  
  {sData.map(renderCarousel)}
</Carousel>

)

}


export default Slider;