import React, {
    // useState,
    // useEffect 
} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Button from '../Button';

const Carousel = ({ infoText, infoTextStyle, isTop = false, text, topText, botText, images, isMiddle = false, botBoldText, botBoldTextStyle, withButton = false, onClickButton, buttonText, bgColorImage = 'bg-black', opacityImage = 'opacity-50' }) => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
        arrows: false,
    };

    return (
        <div className="relative w-full font-primary">
            <Slider {...settings}>
                {images.map((item, index) => {
                    return (
                        <div className={`${bgColorImage}`}>
                            <img key={index} className={`w-full h-screen object-cover ${opacityImage}`} src={item.url} alt={`slide-${index}`} />
                        </div>
                    )
                })}
            </Slider>
            <div className="absolute inset-0"></div>
            <div className={`absolute inset-0 p-8 flex flex-col ${isTop ? `justify-start` : isMiddle ? `justify-center` : `justify-end`} items-center`}>
                <div className="tracking-wide text-white mb-2 text-center">
                    <p className='text-lg'>{topText}</p>
                    <p className='text-3xl md:text-6xl font-bold font-third'>{text}</p>
                    <p className='text-lg'>{botText}</p>
                    <p className={`text-3xl font-bold ${botBoldTextStyle}`}>{botBoldText}</p>
                    {withButton ? <Button text={buttonText} onClick={(e) => onClickButton(e)} /> : <></>}
                    <p className={`text-md ${infoTextStyle}`}>{infoText}</p>
                </div>
            </div>
        </div>
    );
};

export default Carousel;
