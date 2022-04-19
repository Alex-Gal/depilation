import React from 'react'
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel'
// import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup } from 'pure-react-carousel'
import { sliderImagesArr } from '../../../img/sliderImages.js'
import ScrollAnimation from 'react-animate-on-scroll';
// import arrow from '../../../icons/arrow.png';

import "../../../../node_modules/pure-react-carousel/dist/react-carousel.es.css";
import './Carousel.scss'

export const Carousel = () => {
  const [img1, img2, img3, img4, img5, img6] = sliderImagesArr;

  return (
    <section className='carousel'>
      <div className='container'>
        <ScrollAnimation offset={50} delay={100} animateIn='fadeIn'>
          <h2 className='carousel__title'>Фотогалерея</h2>
        </ScrollAnimation>
        <ScrollAnimation offset={20} delay={100} animateIn='bounceInLeft'>
          <hr className='carousel__title_line' />
        </ScrollAnimation>

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
            <Slide className='slider-box__slide' index={0}><img src={img1} alt='Waxing' /></Slide>
            <Slide className='slider-box__slide' index={1}><img src={img2} alt='Waxing' /></Slide>
            <Slide className='slider-box__slide' index={2}><img src={img3} alt='Waxing' /></Slide>
            <Slide className='slider-box__slide' index={3}><img src={img4} alt='Waxing' /></Slide>
            <Slide className='slider-box__slide' index={4}><img src={img5} alt='Waxing' /></Slide>
            <Slide className='slider-box__slide' index={5}><img src={img6} alt='Waxing' /></Slide>
          </Slider>
          {/* <div className='slider-buttons'>
                <ButtonBack className='slider-buttons__button'><img className='arrow-left' src={arrow} alt='Waxing' /></ButtonBack>
                <ButtonNext className='slider-buttons__button'><img className='arrow-right' src={arrow} alt='Waxing' /></ButtonNext>
              </div>
              <DotGroup className='slider-dots' /> */}
        </CarouselProvider>
      </div>
    </section>
  )
}
