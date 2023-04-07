import React from 'react'
import Header from '../components/website/Header'
import Slider from '../components/website/Slider'
import Booking from '../components/website/Booking'

export default function Main() {
  return (
    <div>
      <Header/>
      <main>
        <Slider/>
        <Booking/>
      </main>
    </div>
  )
}
