import React, { useEffect, useRef, useState } from 'react'
import Button from '../Button';

export default function Photo({ img, duration = '500', translateVisible = 'translate-y-0', translateInvisible = 'translate-y-24' }) {
    const sectionRef = useRef(null)
    const [isVisible, setIsVisible] = useState(false)
    const [isOpen, setIsOpen] = useState(false);

    const handleImageClick = () => {
        setIsOpen(true);
    };

    const handleCloseClick = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        let node = sectionRef.current;
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            {
                root: null,
                rootMargin: "0px",
                threshold: 0.1,
            }
        );

        if (node) {
            observer.observe(node);
        }

        return () => {
            if (node) {
                observer.unobserve(node);
                node = null;
            }
        };
    }, [sectionRef]);

    return (
        <div className=''>
            {isOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-75 pt-48 z-50">
                    <img
                        alt='gallery'
                        src={img}
                        className="m-auto"
                        style={{ maxWidth: "90%", maxHeight: "90%" }}
                    />
                    <Button text={`close`} onClick={() => handleCloseClick()} customStyle={`fixed top-0 right-0 m-4 text-white bg-black p-2 mt-32`} />
                </div>
            )}
            <div ref={sectionRef} className={`w-full h-full rounded-3xl transition-all duration-${duration} ${isVisible ? 'opacity-100 ' + translateVisible : 'opacity-0 ' + translateInvisible}`}>
                <img alt='gallery' src={img} className='h-full w-full rounded-3xl object-cover' onClick={handleImageClick} />
            </div>
        </div>
    )
}
