import React from 'react'
import './Header.scss'
import ScrollAnimation from 'react-animate-on-scroll';

export const Header = () => {
    return (
        <div className='header'>
            <div className="navbar"></div>
            <div className="container">
                <nav className='nav'>
                    <p className='nav__logo'>IRINA_VOLOSNET</p>
                    <div className='nav__links'>
                        <a href='#block_1'>Главная</a>
                        <a href='#block_2'>Обо мне</a>
                        <a href='./'>Курсы</a>
                        <a href='./'>Прайс-лист</a>
                        <a href='#block_3'>Контакты</a>
                    </div>
                    <p className='nav__par'>МТС +375292084163</p>
                </nav>
                <div className='block-online'>
                    <ScrollAnimation delay={1000} duration={1} animateOnce={true} animateIn="fadeIn">
                        <p className='block-online__main-text'>irina_volosnet</p>
                    </ScrollAnimation>
                    <ScrollAnimation delay={1200} duration={1} animateOnce={true} animateIn="fadeIn">
                        <p className='block-online__main-text-description'>студия депиляции</p>
                    </ScrollAnimation>
                    <ScrollAnimation delay={1400} duration={1} animateOnce={true} animateIn="fadeIn">
                        <p className='block-online__main-text-motto'>Лечу зависимость от бритвы</p>
                    </ScrollAnimation>
                    <ScrollAnimation delay={1600} duration={1} animateOnce={true} animateIn="bounceInLeft">
                        <button onClick={() => window.open('https://dikidi.net/448067', '_blank')} className='block-online__button'>Записаться онлайн</button>
                    </ScrollAnimation>
                </div>
                {/* <ScrollAnimation animateIn='bounceInRight'
                    animateOut='bounceOutLeft'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Distinctio esse voluptas excepturi earum repudiandae ipsa,
                        a culpa temporibus explicabo perspiciatis suscipit doloremque
                        quod fuga laboriosam quam inventore odio adipisci rem.</p>
                </ScrollAnimation> */}
            </div>
        </div>
    )
}
