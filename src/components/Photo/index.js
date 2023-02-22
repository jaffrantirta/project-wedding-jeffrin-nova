import React, { useEffect, useRef, useState } from 'react'

export default function Photo({ img, duration = '500', translateVisible = 'translate-y-0', translateInvisible = 'translate-y-24' }) {
    const sectionRef = useRef(null)
    const [isVisible, setIsVisible] = useState(false)
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
    }, [sectionRef])
    return (
        <div ref={sectionRef} className={`bg-primary rounded-3xl transition-all duration-${duration} ${isVisible ? 'opacity-100 ' + translateVisible : 'opacity-0 ' + translateInvisible}`}>
            <img alt='gallery' src={img} className='h-full w-full' />
        </div>
    )
}
