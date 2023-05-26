import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item style={{ height: "350px" }}>
        <img
          className="d-block w-100"
          src="https://nld.mediacdn.vn/2021/1/11/8-gnam-1610375276122167537821.jpg"
          alt="First slide"
          style={{ objectFit: "cover", height: "350px" }}
        />
      </Carousel.Item>
      <Carousel.Item style={{ height: "350px" }}>
        <img
          className="d-block w-100"
          src="https://mona.media/wp-content/uploads/2017/10/designer.png"
          alt="First slide"
          style={{ objectFit: "cover", height: "350px" }}
        />
      </Carousel.Item>
      <Carousel.Item style={{ height: "350px" }}>
        <img
          className="d-block w-100"
          src="https://lptech.asia/uploads/files/2022/06/15/freelancer-la-gi-1.png"
          alt="Third slide"
          style={{ objectFit: "cover", height: "350px" }}
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
