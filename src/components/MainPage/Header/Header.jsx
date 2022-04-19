import React from 'react'
import './Header.scss'
import ScrollAnimation from 'react-animate-on-scroll';
import { ReactComponent as PhoneIcon } from '../../../icons/phone.svg'

export const Header = () => {
    return (
        <div className='header'>
            <div className="navbar"></div>
            <div className="container">
                <div className='nav'>
                    <p className='nav__logo'>IRINA<br />VOLOSNET</p>



                    <nav className='menu'>
                        <ul className='menu__list'>
                            <li>
                                <a className='menu__link' href='/'>Услуги</a>
                                <span className="menu__arrow arrow"></span>
                                <ul className='sub-menu__list'>
                                    <li>
                                        <a href="/">Восковая депиция</a>
                                        <ul className="sub-sub-menu__list">
                                            <li>
                                                <a className="sub-sub-menu__link" href='/'>Бикини</a>
                                            </li>
                                            <li>
                                                <a className="sub-sub-menu__link" href='/'>Бикини</a>
                                            </li>
                                            <li>
                                                <a className="sub-sub-menu__link" href='/'>Бикини</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="/">Пилинг</a>
                                    </li>
                                    <li>
                                        <a href="/">Комплексы</a>
                                    </li>
                                </ul>
                            </li>
                            <li><a className='menu__link' href='/'>Цены</a></li>
                            <li><a className='menu__link' href='/'>Обучение</a></li>
                            <li><a className='menu__link' href='/'>Обо мне</a></li>
                            <li><a className='menu__link' href='/'>Галерея</a></li>
                            <li><a className='menu__link' href='/'>Контакты</a></li>

                        </ul>
                    </nav>




                    <div className='nav__phone-block'>
                        <PhoneIcon className='nav__phone-icon' />
                        <p className='nav__phone'>+375292060068</p>
                    </div>
                </div>
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
            </div>
        </div>
    )
}
