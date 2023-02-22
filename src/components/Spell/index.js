import React, { useEffect, useRef, useState } from 'react'

export default function Spell() {
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
        <section ref={sectionRef} className={`bg-primary font-primary text-white text-center p-10`}>
            <p className={`mb-10 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'}`}>"Ya Tuhanku Yang Maha Pengasih, anugrahkanlah kepada pasangan ini senantiasa kebahagiaan, kesehatan, tetap bersatu dan tidak pernah terpisahkan, panjang umur dan tinggal di rumah yang penuh kegembiraan bersama seluruh keturunannya."</p>
            <p className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'}`}> Rg Veda X.85.42.</p>
        </section>
    )
}
