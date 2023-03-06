import React from 'react'
import { PS1L, PS9L } from '../../assets/PhotoShots';
import Carousel from '../Carousel';

export default function Hero() {
    const images = [
        {
            url: PS9L
        },
        {
            url: PS1L
        }
    ]
    return (
        <section className="h-screen">
            <Carousel isTop={true} images={images} text={`Jeffrin & Novania`} topText={`The Wedding of`} botText={`Minggu, 16 April 2023`} />
        </section>
    )
}
