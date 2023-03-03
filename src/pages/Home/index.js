import React, { useEffect } from 'react'
import { BrideGroom, Countdown, DigitalGift, EventDetails, Footer, Galleries, Greeting, Hero, Spell, WishingAndGreeting } from '../../components'

export default function Home() {
  useEffect(() => {
    document.title = `Jeffrin & Novania Wedding`;
  }, [])

  return (
    <div>
      <Hero />
      <Greeting />
      <BrideGroom />
      <Countdown />
      <EventDetails />
      <Spell />
      <DigitalGift />
      <Galleries />
      <WishingAndGreeting />
      <Footer />
    </div>
  )
}
