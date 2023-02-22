import React, { useEffect, useRef, useState } from 'react'
import { ImgMandala, ImgSwastyastu } from '../../asstes';

export default function Greeting() {
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
                threshold: 0.5,
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
        <section className='h-fit' ref={sectionRef}>
            <div className="relative h-60 w-full">
                <div className="absolute inset-0 flex justify-center items-center">
                    <div className="overflow-hidden h-60 w-96">
                        <img alt='mandala' src={ImgMandala} className='h-96 w-96 mx-auto animate-spin-slowly -mt-40' />
                    </div>
                </div>
            </div>






            <div className='bg-primary justify-center flex flex-col p-10'>
                <img alt='o-swastyastu' src={ImgSwastyastu} className={`w-fit h-auto md:h-fit self-center transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'}`} />
                <p className={`text-center text-white font-primary px-5 md:px-40  transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-32'}`}> Atas asung kertha wara nugraha Ida Sang Hyang Widhi Wasa/ Tuhan Yang Maha Esa, kami bermaksud mengundang Bapak/ Ibu/ Saudara/ i pada Upacara Manusa Yadnya Pawiwahan putra dan putri kami. </p>
            </div>
        </section>
    )
}
