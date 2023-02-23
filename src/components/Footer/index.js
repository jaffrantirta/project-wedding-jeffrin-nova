import React from 'react'
import Carousel from '../Carousel'

export default function Footer() {
    const images = [
        {
            url: 'https://sepucuksurat.id/wp-content/uploads/2022/12/12-768x513.jpg'
        },
        {
            url: 'https://sepucuksurat.id/wp-content/uploads/2022/12/12-768x513.jpg'
        }
    ]
    return (
        <section className='h-fit'>
            <Carousel images={images} text={`Jeffrin & Novania`} topText={`- Terima Kasih -`} />
        </section>
    )
}
