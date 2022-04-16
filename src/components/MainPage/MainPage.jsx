import React from 'react'
import { Footer } from '../Footer/Footer'
import { Header } from '../Header/Header'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup } from 'pure-react-carousel'
import {sliderImagesArr} from '../../img/sliderImages.js'
import arrow from '../../icons/arrow.png';

import "../../../node_modules/pure-react-carousel/dist/react-carousel.es.css";
import './MainPage.scss'

export const MainPage = () => {
  const [img1, img2, img3, img4, img5, img6] = sliderImagesArr;

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
              className='carousel-provider'
              naturalSlideWidth={100}
              naturalSlideHeight={125}
              totalSlides={6}
              isPlaying={true}
              interval={2000}
              touchEnabled={true}
              visibleSlides={3}
              infinite={true}
            >
              <Slider className='slider-box'>
                <Slide className='slider-box__slide' index={0}><img src={img1} alt='Waxing'/></Slide>
                <Slide className='slider-box__slide' index={1}><img src={img2} alt='Waxing'/></Slide>
                <Slide className='slider-box__slide' index={2}><img src={img3} alt='Waxing'/></Slide>
                <Slide className='slider-box__slide' index={3}><img src={img4} alt='Waxing'/></Slide>
                <Slide className='slider-box__slide' index={4}><img src={img5} alt='Waxing'/></Slide>
                <Slide className='slider-box__slide' index={5}><img src={img6} alt='Waxing'/></Slide>
              </Slider>
              <div className='slider-buttons'>
                <ButtonBack className='slider-buttons__button'><img className='arrow-left' src={arrow} alt='Waxing'/></ButtonBack>
                <ButtonNext className='slider-buttons__button'><img className='arrow-right' src={arrow} alt='Waxing'/></ButtonNext>
                {/* <ButtonBack className='slider-buttons__button'><img src={arrow} alt='arrow' className="arrow-left"/></ButtonBack>
                <ButtonNext className='slider-buttons__button'><img src={arrow} alt='arrow' className="arrow-right"/></ButtonNext> */}
              </div>
              <DotGroup className='slider-dots' />
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
