import React from 'react'
import { BrideGroom, Countdown, EventDetails, Greeting, Hero, Spell } from '../../components'

export default function Home() {
  return (
    <div>
      <Hero />
      <Greeting />
      <BrideGroom />
      <Countdown />
      <EventDetails />
      <Spell />
    </div>
  )
}
