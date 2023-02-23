import React from 'react'
import Carousel from '../Carousel';

export default function Hero() {
    const images = [
        {
            url: 'https://sepucuksurat.id/wp-content/uploads/2022/12/12-768x513.jpg'
        },
        {
            url: 'https://sepucuksurat.id/wp-content/uploads/2022/12/12-768x513.jpg'
        }
    ]
    return (
        <section className="h-screen">
            <Carousel isTop={true} images={images} text={`Jeffrin & Novania`} topText={`The Wedding of`} botText={`Minggu, 16 April 2023`} />
        </section>
    )
}
