import React from 'react'
import { ImgBride2, ImgGroom2, PS10L, PS11P, PS12P, PS1L, PS2L, PS3P, PS6P, PS7P, PS8P, PS9L } from '../../assets'
import Photo from '../Photo'

export default function Galleries() {
    const images = [
        {
            url: ImgGroom2,
            duration: '1000',
            translateVisible: '-translate-x-0',
            translateInvisible: '-translate-x-20'
        },
        {
            url: ImgBride2,
            duration: '700',
            translateVisible: 'translate-y-0',
            translateInvisible: 'translate-y-20'
        },
        {
            url: PS3P,
            duration: '1000',
            translateVisible: '-translate-x-0',
            translateInvisible: '-translate-x-20'
        },
        {
            url: PS6P,
            duration: '700',
            translateVisible: 'translate-y-0',
            translateInvisible: 'translate-y-20'
        },
        {
            url: PS7P,
            duration: '500',
            translateVisible: '-translate-x-0',
            translateInvisible: '-translate-x-20'
        },
        {
            url: PS8P,
            duration: '300',
            translateVisible: 'translate-x-0',
            translateInvisible: 'translate-x-20'
        },
        {
            url: PS11P,
            duration: '1000',
            translateVisible: '-translate-x-0',
            translateInvisible: '-translate-x-20'
        },
        {
            url: PS12P,
            duration: '1000',
            translateVisible: 'translate-x-0',
            translateInvisible: 'translate-x-20'
        },
        {
            url: PS2L,
            duration: '300',
            translateVisible: '-translate-x-0',
            translateInvisible: '-translate-x-20'
        },
        {
            url: PS1L,
            duration: '700',
            translateVisible: '-translate-y-0',
            translateInvisible: '-translate-y-20'
        },
        {
            url: PS9L,
            duration: '1000',
            translateVisible: 'translate-x-0',
            translateInvisible: 'translate-x-20'
        },
        {
            url: PS10L,
            duration: '700',
            translateVisible: 'translate-y-0',
            translateInvisible: 'translate-y-20'
        }
    ]
    return (
        <section className='p-5 text-center font-primary text-primary'>
            <h1 className={`font-third text-5xl`}>Moment Bahagia</h1>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-1 md:px-32 p-5'>
                {images.map((item, index) => <Photo key={index} img={item.url} duration={item.duration} translateVisible={item.translateVisible} translateInvisible={item.translateInvisible} />)}
            </div>
            <div className='p-5 md:p-10 justify-center flex'>
                <iframe className='w-full md:w-1/2 h-auto aspect-video rounded-3xl shadow-md' src="https://www.youtube.com/embed/5ZoA8HKudE0?controls=0" title="Jeffrin & Novania" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </section>
    )
}
