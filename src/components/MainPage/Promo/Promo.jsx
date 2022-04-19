import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll';

import './Promo.scss'

export const Promo = () => {
    return (
        <section className='promo'>
            <div className='container'>
                <ScrollAnimation offset={50} delay={100} animateIn='fadeIn'>
                    <h2 className='promo__title'>Видео</h2>
                </ScrollAnimation>
                <ScrollAnimation offset={20} delay={100} animateIn='bounceInLeft'>
                    <hr className='promo__line' />
                </ScrollAnimation>
                <div className='promo__video'>
                    <iframe
                        className='promo__video_player'
                        src="https://www.youtube.com/embed/9bIHFDQw_64"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen>
                    </iframe>
                </div>
            </div>
        </section>
    )
}
