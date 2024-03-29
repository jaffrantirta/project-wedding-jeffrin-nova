import React, { useEffect, useRef, useState } from 'react'
import CardCountdown from '../CardCountdown';

export default function Countdown({ version }) {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const targetDate = {
        apuan: {
            date: '2023-04-16T00:00:00Z'
        },
        pupuan: {
            date: '2023-04-17T00:00:00Z'
        }
    }
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
        <section className='h-fit font-primary text-center text-white' ref={sectionRef}>
            <div className='bg-primary justify-center flex flex-col p-10'>
                <h1 className={`text-3xl :text-5xl font-third transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-32'}`}>Menuju Hari yang Berbahagia</h1>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-5 md:px-20 py-10'>
                    <CardCountdown value={`days`} targetDate={targetDate[version].date} text={`Hari`} />
                    <CardCountdown value={`hours`} targetDate={targetDate[version].date} text={`Jam`} />
                    <CardCountdown value={`minutes`} targetDate={targetDate[version].date} text={`Menit`} />
                    <CardCountdown value={`seconds`} targetDate={targetDate[version].date} text={`Detik`} />
                </div>
            </div>
        </section>
    )
}
