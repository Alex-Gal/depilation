import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll';

import './OnMap.scss'

export const OnMap = () => {
  return (
    <section className='on-map'>
      <div className="container">
        <ScrollAnimation offset={50} delay={100} animateIn='fadeIn'>
          <h2 className='on-map__title'>Студия на карте</h2>
        </ScrollAnimation>
        <ScrollAnimation offset={20} delay={100} animateIn='bounceInLeft'>
          <hr className='on-map__line' />
        </ScrollAnimation>
      </div>

      <iframe className='on-map__frame'
        title='on-map-frame'
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2445.717641256413!2d24.342275307879188!3d52.19400497185066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472120e3c30d3f3f%3A0xf8bbed157aa6a017!2z0JPQvtGB0YLQuNC90LjRhtCwINCh0YPQstC-0YDQvtCy!5e0!3m2!1sru!2sby!4v1650194930354!5m2!1sru!2sby"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </section>
  )
}
