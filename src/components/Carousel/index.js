import React, {
    // useState,
    // useEffect 
} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = ({ isTop = false, text, topText, botText, images }) => {
    // const [currentIndex, setCurrentIndex] = useState(0);

    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
        arrows: false,
        // afterChange: (index) => {
        //     setCurrentIndex(index);
        // },
    };

    // useEffect(() => {
    //     const images = document.querySelectorAll('.img-zoom')
    //     images.forEach(function (image, index) {
    //         console.log(index, currentIndex);
    //         if (index === currentIndex) {
    //             image.classList.add('zoom-in');
    //         } else {
    //             image.classList.remove('zoom-in');
    //         }
    //     });
    // }, [currentIndex]);

    return (
        <div className="relative w-full font-primary">
            <Slider {...settings}>
                {images.map((item, index) => {
                    return (
                        <img key={index} className="w-full h-screen object-cover img-zoom" src={item.url} alt={`slide-${index}`} />
                    )
                })}
            </Slider>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className={`absolute inset-0 p-8 flex flex-col ${isTop ? `justify-start` : `justify-end`} items-center`}>
                <div className="tracking-wide text-white mb-2 text-center">
                    <p className='text-lg'>{topText}</p>
                    <p className='text-3xl md:text-6xl font-bold font-third'>{text}</p>
                    <p className='text-lg'>{botText}</p>
                </div>
            </div>
        </div>
    );
};

export default Carousel;
