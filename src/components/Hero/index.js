import React, { useEffect, useRef, useState } from 'react'
import Carousel from '../Carousel';

export default function Hero() {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const images = [
        {
            url: 'https://sepucuksurat.id/wp-content/uploads/2022/12/12-768x513.jpg'
        },
        {
            url: 'https://sepucuksurat.id/wp-content/uploads/2022/12/12-768x513.jpg'
        }
    ]
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
        <section className="h-screen" ref={sectionRef}>
            <Carousel isTop={true} images={images} text={`Jeffrin & Novania`} topText={`The Wedding of`} botText={`Minggu, 16 April 2023`} />
        </section>
    )
}
