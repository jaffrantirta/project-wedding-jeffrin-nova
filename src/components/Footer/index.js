import React from 'react'
import { PS1L, PS2L } from '../../asstes'
import Carousel from '../Carousel'

export default function Footer() {
    const images = [
        {
            url: PS2L
        },
        {
            url: PS1L
        }
    ]
    return (
        <section className='h-fit'>
            <Carousel images={images} text={`Jeffrin & Novania`} topText={`- Terima Kasih -`} botText={`supported by Jaffran`} />
        </section>
    )
}
