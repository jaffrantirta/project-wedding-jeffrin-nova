import React from 'react'
import { BrideGroom, Countdown, DigitalGift, EventDetails, Galleries, Greeting, Hero, Spell } from '../../components'

export default function Home() {
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
    </div>
  )
}
