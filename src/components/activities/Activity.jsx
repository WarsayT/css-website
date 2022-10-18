import React from "react";
// Import Swiper React components
import IMG1 from "../../assets/img1.jpeg"
import IMG2 from "../../assets/img2.jpeg"
import IMG3 from '../../assets/img3.jpeg';
import Carousel from 'react-bootstrap/Carousel';

// import required modules
const data = [
    {
      img: IMG1,
      header: "Lorem Ipsum is simply dummy",
      para: "Lorem Ipsum has been the industry's standard dummy",
      link: "https://zu.ac.ae"
    },
    {
        img: IMG2,
        header: "Lorem Ipsum is simply dummy",
        para: "Lorem Ipsum has been the industry's standard dummy",
        link: "https://zu.ac.ae"
    },
    {
        img: IMG3,
        header: "Lorem Ipsum is simply dummy",
        para: "Lorem Ipsum has been the industry's standard dummy",
        link: "https://zu.ac.ae"
    }
]

const Activity = () => {
    return (
        <section id="activity">
            <div className="activity__container">
            <Carousel variant="dark" fade interval={2000}>
                {
                    data.map(({img, header, para, link}, index) => {
                        return (
                            <Carousel.Item key={index}>
                                <img
                                className="d-block w-100"
                                src={img}
                                alt="First slide"
                                />
                                <Carousel.Caption>
                                <h5>{header}</h5>
                                <p>{para}</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        )
                    })
                }   
            </Carousel>
            </div>
            
        </section>  
    )
}

export default Activity
