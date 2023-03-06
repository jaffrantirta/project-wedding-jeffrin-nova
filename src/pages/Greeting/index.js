import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { BgMusic, PS2L } from '../../assets'
import { Carousel } from '../../components'

export default function Greeting() {
    const { search } = useLocation()
    const queryParams = new URLSearchParams(search);
    const navigate = useNavigate()
    const [isPlaying, setIsPlaying] = useState(false)
    const audio = new Audio(BgMusic)

    const togglePlay = () => {
        if (isPlaying) {
            audio.pause()
        } else {
            audio.play()
        }
        setIsPlaying(!isPlaying)
    }
    const images = [
        {
            url: PS2L
        },
    ]
    useEffect(() => {
        document.title = `Jeffrin & Novania Wedding`;
    }, [])
    const handleButtonClick = () => {
        togglePlay()
        let data = { state: { version: queryParams.has('version') ? queryParams.get('version') : 'apuan' } }
        console.log(data);
        navigate(`/invitation`, data)
    }

    return (
        <div className='h-screen'>
            <Carousel
                onClickButton={() => handleButtonClick()}
                infoText={`*Mohon maaf apabila ada kesalahan penulisan nama/gelar`}
                withButton={true}
                buttonText={`Buka Undangan`}
                botBoldTextStyle={`my-10 text-5xl`}
                botBoldText={queryParams.get('name')}
                images={images}
                topText={`The Wedding of`}
                text={`Jeffrin & Novania`}
                botText={queryParams.has('name') ? `Kepada Bapak/Ibu/Saudara/i` : ``}
            />
        </div>
    )
}
