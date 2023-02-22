import React, { useEffect, useRef, useState } from 'react'

export default function Hero() {
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
        <section className="h-screen bg-slate-900 p-10" ref={sectionRef}>
            <div className={`text-slate-900 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-40'}`}>
                <h1 className='text-center text-slate-200 font-primary text-xl'>The Wedding of</h1>
                <h1 className='text-center text-slate-200 font-third text-6xl'>"Jeffrin & Nova"</h1>
                <h1 className='text-center text-slate-200 font-primary'>Minggu, 16 April 2023</h1>
            </div>
        </section>
    )
}
