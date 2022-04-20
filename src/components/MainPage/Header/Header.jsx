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
                                        <a className='sub-menu__link' href="/">Восковая депиляция</a>
                                        {/* <ul className="sub-sub-menu__list">
                                            <li>
                                                <a className="sub-sub-menu__link" href='/'>Бикини классическое</a>
                                            </li>
                                            <li>
                                                <a className="sub-sub-menu__link" href='/'>Бикини глубокое</a>
                                            </li>
                                            <li>
                                                <a className="sub-sub-menu__link" href='/'>Бикини бразильское</a>
                                            </li>
                                            <li>
                                                <a className="sub-sub-menu__link" href='/'>Ноги полностью</a>
                                            </li>
                                            <li>
                                                <a className="sub-sub-menu__link" href='/'>Голень/бедро</a>
                                            </li>
                                            <li>
                                                <a className="sub-sub-menu__link" href='/'>Руки полностью</a>
                                            </li>
                                            <li>
                                                <a className="sub-sub-menu__link" href='/'>Руки до локтя</a>
                                            </li>
                                            <li>
                                                <a className="sub-sub-menu__link" href='/'>Подмышки</a>
                                            </li>
                                            <li>
                                                <a className="sub-sub-menu__link" href='/'>Усики/1 зона на лице</a>
                                            </li>
                                            <li>
                                                <a className="sub-sub-menu__link" href='/'>Полоска на животе</a>
                                            </li>
                                            <li>
                                                <a className="sub-sub-menu__link" href='/'>Ягодицы</a>
                                            </li>
                                            <li>
                                                <a className="sub-sub-menu__link" href='/'>Живот</a>
                                            </li>
                                            <li>
                                                <a className="sub-sub-menu__link" href='/'>Обезболивание зоны бикини</a>
                                            </li>
                                        </ul> */}
                                    </li>
                                    {/* <li>
                                        <a className='sub-menu__link' href="/">Комплексы</a>
                                        <ul className="sub-sub-menu__list">
                                            <li>
                                                <a className="sub-sub-menu__link" href='/'>Подмышки + ноги полностью + бикини классическое</a>
                                            </li>
                                            <li>
                                                <a className="sub-sub-menu__link" href='/'>Подмышки + ноги полностью + бикини глубокое</a>
                                            </li>
                                            <li>
                                                <a className="sub-sub-menu__link" href='/'>Подмышки + голень/бедро + бикини глубокое</a>
                                            </li>
                                            <li>
                                                <a className="sub-sub-menu__link" href='/'>Подмышки + руки полностью + бикини глубокое</a>
                                            </li>
                                            <li>
                                                <a className="sub-sub-menu__link" href='/'>Подмышки + руки полностью + ноги полностью</a>
                                            </li>
                                            <li>
                                                <a className="sub-sub-menu__link" href='/'>Подмышки + руки полностью + голень/бедро</a>
                                            </li>
                                            <li>
                                                <a className="sub-sub-menu__link" href='/'>Подмышки + руки полностью + ноги полностью + бикини глубокое</a>
                                            </li>
                                            <li>
                                                <a className="sub-sub-menu__link" href='/'>Ноги полностью + бикини глубокое</a>
                                            </li>
                                            <li>
                                                <a className="sub-sub-menu__link" href='/'>Голень/бедро + бикини глубокое</a>
                                            </li>
                                        </ul>
                                    </li> */}
                                    <li>
                                        <a className='sub-menu__link' href="/">Пилинг</a>
                                    </li>
                                </ul>
                            </li>
                            <li><a className='menu__link' href='/'>Цены</a></li>
                            <li>
                                <a className='menu__link' href='/'>Обучение</a>
                                <span className="menu__arrow arrow"></span>
                                <ul className='sub-menu__list'>
                                    <li>
                                        <a className='sub-menu__link' href="/">Базовый курс</a>
                                    </li>
                                    <li>
                                        <a className='sub-menu__link' href="/">Гайд для мастера</a>
                                    </li>
                                </ul>
                            </li>
                            <li><a className='menu__link' href='#about'>Обо мне</a></li>
                            <li><a className='menu__link' href='#carousel'>Галерея</a></li>
                            <li><a className='menu__link' href='#contacts'>Контакты</a></li>
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
                        <p className='block-online__main-text-motto'>лечу зависимость от бритвы</p>
                    </ScrollAnimation>
                    <ScrollAnimation delay={1600} duration={1} animateOnce={true} animateIn="bounceInLeft">
                        <button onClick={() => window.open('https://dikidi.net/448067', '_blank')} className='block-online__button'>Записаться онлайн</button>
                    </ScrollAnimation>
                </div>
            </div>
        </div>
    )
}
