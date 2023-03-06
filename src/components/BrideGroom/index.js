import React from 'react'
import { ImgBride2, ImgGroom2, ImgLove } from '../../assets'
import CardBrideGroom from '../CardBrideGroom'

export default function BrideGroom() {
    return (
        <section className='h-fit md:h-screen grid gap-5 grid-cols-1 md:grid-cols-3 font-primary p-10 text-primary md:px-40'>
            <CardBrideGroom
                parentsName={`I Made Kenantara & Ni Kadek Yastini`}
                address={`Br. Tegal Kangin, Desa Ubung Kaja, Denpasar`}
                childOf={`Putra pertama dari pasangan`}
                name={`Jeffrin`}
                fullName={`Jeffrin Martiana Adi Saputra`}
                img={ImgGroom2} />
            <div className={`grid justify-center content-center`}>
                <img alt='love' src={ImgLove} className={`w-15 h-15`} />
            </div>
            <CardBrideGroom
                parentsName={`I Wayan Gita & Ni Made Sumardani`}
                address={`Br. Dinas Kayu Puring, Desa Pupuan, Tabanan`}
                childOf={`Putri pertama dari pasangan`}
                name={`Novania`}
                fullName={`Luh Novania Lestari`}
                img={ImgBride2} />
        </section>
    )
}
