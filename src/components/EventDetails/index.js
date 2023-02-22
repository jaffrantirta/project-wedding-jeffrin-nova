import React, { useEffect, useRef, useState } from 'react'
import { ImgCuciTangan, ImgJagaJarak, ImgPakaiMasker } from '../../asstes/Images';

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
        <section ref={sectionRef} className={`h-fit font-primary p-2 md:p-10 origin-center flex flex-col gap-3 justify-center items-center text-primary`}>
            <div className={`text-sm md:text-xl border-2 border-primary p-2 md:p-10 rounded-3xl text-center w-5/6 shadow-2xl`}>
                <p className={`mb-7`}>Merupakan suatu kehormatan dan kebahagiaan kami apabila Bapak/Ibu/Saudara/i berkenan hadir memberikan doa restu.</p>
                <p className={`text-2xl md:text-6xl font-third mb-7`}>Resepsi Pawiwahan</p>
                <p className={`text-sm md:text-xl`}>Minggu, 16 April 2023</p>
                <p className={`text-sm md:text-xl`}>Pukul 13.00 WITA - Selesai</p>
                <p className={`text-sm md:text-xl mb-7`}>Br. Apuan, Desa Apuan, Kecamatan Baturiti, Tabanan</p>
                <button className={`px-6 py-3 rounded-full shadow-xl bg-primary text-white`}>Map Lokasi Acara</button>
            </div>
            <div className={`text-sm md:text-xl p-2 md:p-10 rounded-3xl text-center w-5/6`}>
                <div className={`mb-5`}>
                    <p className={`font-third text-2xl md:text-5xl`}>Protokol Kesehatan</p>
                    <p>Tanpa mengurangi rasa hormat, dikarenakan situasi yang sedang terjadi ditengah pandemi covid-19 ini kami memohon untuk wajib mematuhi seluruh protokol kesehatan yang ada di lokasi acara.</p>
                </div>
                <div className={`grid grid-cols-3 gap-5`}>
                    <div className={`grid justify-center`}>
                        <img src={ImgCuciTangan} className={`w-auto h-auto`} />
                        <p>Cuci Tangan</p>
                    </div>
                    <div className={`grid justify-center`}>
                        <img src={ImgJagaJarak} className={`w-auto h-auto`} />
                        <p>Jaga Jarak</p>
                    </div>
                    <div className={`grid justify-center`}>
                        <img src={ImgPakaiMasker} className={`w-auto h-auto`} />
                        <p>Pakai Masker</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
