import React, { useEffect, useRef, useState } from 'react'
import { ImgCuciTangan, ImgJagaJarak, ImgPakaiMasker } from '../../assets/Images';
import Button from '../Button';

export default function EventDetails() {
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
        <section ref={sectionRef} className={`h-fit font-primary p-2 md:p-10 origin-center flex flex-col gap-3 justify-center items-center text-primary`}>
            <div className={`text-sm md:text-xl border-2 border-primary p-2 md:p-10 rounded-3xl text-center w-5/6 shadow-2xl`}>
                <p className={`mb-7 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-32'}`}>Merupakan suatu kehormatan dan kebahagiaan kami apabila Bapak/Ibu/Saudara/i berkenan hadir memberikan doa restu.</p>
                <p className={`text-2xl md:text-6xl font-third mb-7 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-32'}`}>Resepsi Pawiwahan</p>
                <p className={`text-sm md:text-xl transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-32'}`}>Minggu, 16 April 2023</p>
                <p className={`text-sm md:text-xl transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-32'}`}>Pukul 13.00 WITA - Selesai</p>
                <p className={`text-sm md:text-xl transition-all duration-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-32'} mb-7`}>Br. Apuan, Desa Apuan, Kecamatan Baturiti, Tabanan</p>
                <Button customStyle={`transition-all duration-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-32'}`} text={`Map Lokasi Acara`} />
            </div>
            <div className={`text-sm md:text-xl p-2 md:p-10 rounded-3xl text-center w-5/6`}>
                <div className={`mb-5`}>
                    <p className={`font-third text-2xl md:text-5xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-32'}`}>Protokol Kesehatan</p>
                    <p className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-32'}`}>Tanpa mengurangi rasa hormat, dikarenakan situasi yang sedang terjadi ditengah pandemi covid-19 ini kami memohon untuk wajib mematuhi seluruh protokol kesehatan yang ada di lokasi acara.</p>
                </div>
                <div className={`grid grid-cols-3 gap-5`}>
                    <div className={`grid justify-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-32'}`}>
                        <img alt='cuci-tangan' src={ImgCuciTangan} className={`w-auto h-auto`} />
                        <p>Cuci Tangan</p>
                    </div>
                    <div className={`grid justify-center transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-32'}`}>
                        <img alt='jaga-jarak' src={ImgJagaJarak} className={`w-auto h-auto`} />
                        <p>Jaga Jarak</p>
                    </div>
                    <div className={`grid justify-center transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-32'}`}>
                        <img alt='pakai-masker' src={ImgPakaiMasker} className={`w-auto h-auto`} />
                        <p>Pakai Masker</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
