import React from 'react'
import { Header } from './Header/Header'
import { About } from './About/About'
import { Footer } from './Footer/Footer'
import { Carousel } from './Carousel/Carousel'
import { Promo } from './Promo/Promo'
import { OnMap } from './OnMap/OnMap'

import './MainPage.scss'

export const MainPage = () => {
  return (
    <>
      <Header />
      <main className='main'>
        <About />
        <Carousel />
        <Promo />
        <OnMap />
      </main>
      <Footer />
    </>
  )
}
