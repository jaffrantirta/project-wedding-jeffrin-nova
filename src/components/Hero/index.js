import React from 'react'
import { PS1L, PS9L } from '../../assets/PhotoShots';
import { DETAILS_EVENT } from '../../utils/Constant';
import Carousel from '../Carousel';

export default function Hero({ version }) {
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
            <Carousel isTop={true} images={images} text={`Jeffrin & Novania`} topText={`The Wedding of`} botText={DETAILS_EVENT[version].date} />
        </section>
    )
}
