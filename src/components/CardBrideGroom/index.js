import React, { useEffect, useRef, useState } from 'react'
import { ImgCircle } from '../../asstes';

export default function CardBrideGroom({ img, name, fullName, parentsName, address, childOf }) {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
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
        <div ref={sectionRef} className={`text-center flex flex-col items-center border-2 border-primary rounded-3xl content-center p-10 shadow-lg transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'}`}>
            <div className='relative w-52 h-52'>
                <img alt={name} src={img} className={`absolute w-52 h-52 transition-all duration-1000 object-cover ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'}`} />
                <img alt={name} src={ImgCircle} className={`absolute w-52 h-52 transition-all duration-1000 object-cover ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'}`} />
            </div>
            <h1 className={`font-third text-6xl mb-5 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'}`}>{name}</h1>
            <p className={`text-xl mb-5 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'}`}>{fullName}</p>
            <p className={`transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'}`}>{childOf}</p>
            <p className={`transition-all duration-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'}`}>{parentsName}</p>
            <p className={`transition-all duration-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'}`}>{address}</p>
        </div>
    )
}
