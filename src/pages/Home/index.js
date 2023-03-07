import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { BrideGroom, Countdown, DigitalGift, EventDetails, Footer, Galleries, Greeting, Hero, Spell, WishingAndGreeting } from '../../components'

export default function Home() {
  const { state } = useLocation()
  const { version } = state
  const navigate = useNavigate()
  useEffect(() => {
    document.title = `Jeffrin & Novania Wedding`;
    if (!state || !state.hasOwnProperty('version')) {
      navigate('/')
    }
  }, [state, navigate, version])

  return (
    <div>
      <Hero version={version} />
      <Greeting />
      <BrideGroom />
      <Countdown version={version} />
      <EventDetails version={version} />
      <Spell />
      <DigitalGift />
      <Galleries />
      <WishingAndGreeting />
      <Footer />
    </div>
  )
}
