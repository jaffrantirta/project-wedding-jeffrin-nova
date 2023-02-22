import React from 'react'
import { ImgBCA } from '../../asstes'
import Photo from '../Photo'

export default function Galleries() {
    return (
        <section className='p-5 text-center font-primary text-primary'>
            <h1 className={`font-third text-5xl`}>Moment Bahagia</h1>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-1 md:px-32 p-5'>
                <Photo img={ImgBCA} duration={`1000`} translateVisible={`translate-x-0`} translateInvisible={`translate-x-20`} />
                <Photo img={ImgBCA} duration={`700`} translateVisible={`translate-x-0`} translateInvisible={`-translate-x-20`} />
                <Photo img={ImgBCA} duration={`500`} translateVisible={`translate-y-0`} translateInvisible={`-translate-y-20`} />
            </div>
        </section>
    )
}
