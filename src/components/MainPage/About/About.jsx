import React from 'react'
import { aboutImages } from '../../../img/aboutImages.js'
import ScrollAnimation from 'react-animate-on-scroll';

import './About.scss'

export const About = () => {
    const [img1] = aboutImages;

    return (
        <section className='about'>
            <div className='container'>
                <div className="about_block">
                    <div className='about__text'>
                        <ScrollAnimation offset={50} delay={100} animateIn='fadeIn'>
                            <h2 className='about__text_title'>Обо мне</h2>
                        </ScrollAnimation>
                        <ScrollAnimation offset={20} delay={100} animateIn='bounceInLeft'>
                            <hr className='about__text_line' />
                        </ScrollAnimation>

                        <ul className='about__text_list'>
                            <ScrollAnimation offset={20} delay={200} duration={1} animateIn='bounceInLeft'>
                                <li>Меня зовут Ирина Галашко и я являюсь основателем студии IRINA_VOLOSNET.</li>
                            </ScrollAnimation>
                            <ScrollAnimation offset={20} delay={300} duration={1} animateIn='bounceInLeft'>
                                <li>Я являюсь сертифицированным мастером по восковой депиляции.</li>
                            </ScrollAnimation>
                            <ScrollAnimation offset={20} delay={400} duration={1} animateIn='bounceInLeft'>
                                <li>Стремление к лучшему и постоянное совершенствование своих знаний-позволяет
                                    мне успешно работать в индустрии красоты.
                                </li>
                            </ScrollAnimation>
                            <ScrollAnimation offset={20} delay={500} duration={1} animateIn='bounceInLeft'>
                                <li>В студии действует карта лояльности для постоянных клиентов, по которой вы
                                    можете получить приятную скидку.</li>
                            </ScrollAnimation>
                            <ScrollAnimation offset={20} delay={600} duration={1} animateIn='bounceInLeft'>
                                <li>В студии используются только одноразовые материалы и воски премиум класса,
                                    что делает процедуру депиляции безопасной и комфортной.</li>
                            </ScrollAnimation>
                        </ul>
                    </div>
                    <div className='about__photos'>
                        <ScrollAnimation offset={100} delay={100} animateIn='bounceInRight'>
                            <img className='about__photos_image1' src={img1} alt='Waxing' />
                        </ScrollAnimation>
                        <ScrollAnimation offset={50} delay={100} animateIn='bounceInRight'>
                            <img className='about__photos_image2' src={img1} alt='Waxing' />
                        </ScrollAnimation>
                        <ScrollAnimation offset={50} delay={100} animateIn='bounceInRight'>
                            <img className='about__photos_image3' src={img1} alt='Waxing' />
                        </ScrollAnimation>
                    </div>
                </div>
            </div>
        </section>
    )
}
