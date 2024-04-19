import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const DemoCarousel = (props) => {
    const carouselContent = props.carouselContent;
    return (
        <Carousel className="carousel" infiniteLoop autoPlay showThumbs={false}>
            {carouselContent.map((content) => {
                return <div key={content.id}>
                    <img src={require("./img/" + content.path)} alt="" />
                    <p className="legend">{content.text}</p>
                </div>
            })}
        </Carousel>
    );
}

export default DemoCarousel;