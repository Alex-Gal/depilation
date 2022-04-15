import React from 'react'
import { Footer } from '../Footer/Footer'
import { Header } from '../Header/Header'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup } from 'pure-react-carousel'
import "../../../node_modules/pure-react-carousel/dist/react-carousel.es.css";

import './MainPage.scss'

export const MainPage = () => {
  return (
    <>
      <Header />

      <main className='main'>

        <section className='about'>
          <div className='container'>
            <h2>About me</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Distinctio esse voluptas excepturi earum repudiandae ipsa,
              a culpa temporibus explicabo perspiciatis suscipit doloremque
              quod fuga laboriosam quam inventore odio adipisci rem.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Distinctio esse voluptas excepturi earum repudiandae ipsa,
              a culpa temporibus explicabo perspiciatis suscipit doloremque
              quod fuga laboriosam quam inventore odio adipisci rem.</p>
          </div>
        </section>

        <section className='galary'>
          <div className='container'>
            <CarouselProvider
              naturalSlideWidth={100}
              naturalSlideHeight={125}
              totalSlides={6}
              isPlaying={true}
              interval={3000}
              touchEnabled={true}
              visibleSlides={3}
              infinite={true}
            >
              <Slider className='slider-box'>
                <Slide index={0}>I am the first Slide.</Slide>
                <Slide index={1}>I am the second Slide.</Slide>
                <Slide index={2}>I am the third Slide.</Slide>
                <Slide index={3}>I am the 4 Slide.</Slide>
                <Slide index={4}>I am the 5 Slide.</Slide>
                <Slide index={5}>I am the 6 Slide.</Slide>
              </Slider>
              <div className='slider-buttons'>
                <ButtonBack>Back</ButtonBack>
                <ButtonNext>Next</ButtonNext>
                <DotGroup />
              </div>
            </CarouselProvider>
          </div>
        </section>

        <section className='promo'>
          <div className='container'>
            Promo Video
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
