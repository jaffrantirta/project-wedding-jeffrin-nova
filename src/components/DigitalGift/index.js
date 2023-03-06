import React, { useEffect, useRef, useState } from 'react'
import { ImgBCA, ImgSanti } from '../../assets'
import Button from '../Button'

export default function DigitalGift() {
    const [isClickedGroom, setIsClickedGroom] = useState(false)
    const [isClickedBride, setIsClickedBride] = useState(false)
    const copyToClipboard = (text, couple) => {
        (couple === 'groom') ? setIsClickedGroom(true) : setIsClickedBride(true)
        setTimeout(() => (couple === 'groom') ? setIsClickedGroom(false) : setIsClickedBride(false), 1000);
        const element = document.createElement('textarea');
        element.value = text;
        document.body.appendChild(element);
        element.select();
        document.execCommand('copy');
        document.body.removeChild(element);
    }
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
        <section ref={sectionRef} className='h-fit font-primary text-primary p-10'>
            <div className='justify-center flex flex-col p-10 mb-10'>
                <img alt='om-shanti' src={ImgSanti} className={`w-96 h-auto self-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-32'}`} />
            </div>
            <p className={`text-center mb-10 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-32'}`}>Kami yang berbahagia,</p>
            <div className={`grid grid-cols-2 gap-5 text-center mb-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-32'}`}>
                <div>
                    <p>Keluarga Besar</p>
                    <p className='text-xl'>I Made Kenantara</p>
                </div>
                <div>
                    <p>Keluarga Besar</p>
                    <p className='text-xl'>I Wayan Gita</p>
                </div>
            </div>
            <p className={`font-third text-5xl text-center mb-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-32'}`}>Kado Digital</p>
            <p className={`text-lg text-center md:px-20 transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-32'}`}>Kehadiran & doa Bapak/ Ibu/ Saudara/ i sudah merupakan hadiah terbaik bagi kami. Namun jika memberi adalah bentuk tanda kasih sayang Anda, kami dengan senang hati menerimanya dan itu akan semakin melengkapi kebahagiaan kami.</p>
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-20 mt-5 md:px-20 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-32'}`}>
                <div className='border-2 border-primary rounded-3xl text-center p-10 flex flex-col gap-3 justify-center items-center'>
                    <img alt='bca' src={ImgBCA} className='w-40 h-auto' />
                    <p className='mt-4'>BCA 2323232323 a/n Jeffrin Martiana</p>
                    <div className='relative'>
                        <div className={`absolute h-full w-full rounded-full bg-rose-800 ${isClickedGroom ? 'animate-ping opacity-75 block' : 'opacity-0 hidden'}`}></div>
                        <Button text='salin rekening' onClick={() => copyToClipboard('hai', 'groom')} />
                    </div>
                </div>
                <div className='border-2 border-primary rounded-3xl text-center p-10 flex flex-col gap-3 justify-center items-center'>
                    <img alt='bca' src={ImgBCA} className='w-40 h-auto' />
                    <p className='mt-4'>BCA 2323232323 a/n Luh Novania Lestari</p>
                    <div className='relative'>
                        <div className={`absolute h-full w-full rounded-full bg-rose-800 ${isClickedBride ? 'animate-ping opacity-75 block' : 'opacity-0 hidden'}`}></div>
                        <Button text='salin rekening' onClick={() => copyToClipboard('hai', 'bride')} />
                    </div>
                </div>

            </div>
        </section>
    )
}
