import React from 'react'
import { aboutImages } from '../../../img/aboutImages.js'

import './About.scss'

export const About = () => {
    const [img1] = aboutImages;

    return (
        <section className='about'>
            <div className='container'>
                <div>
                    <h2 className='about__title'>О себе</h2>
                    <p>Студия депиляции
                        IRINA_VOLOSNET
                        Меня зовут Ирина Галашко и я являюсь основателем студии IRINA_VOLOSNET.
                        Я являюсь сертифицированным мастером по восковой депиляции.
                        Стремление к лучшему и постоянное совершенствование своих знаний-позволяет мне успешно работать в индустрии красоты.
                        В студии действует карта лояльности для постоянных клиентов, по которой вы можете получить
                        приятную скидку.
                        В студии используются только одноразовые материалы и воски премиум класса, что делает процедуру депиляции безопасной и комфортной.
                    </p>
                </div>
                <div className='about__photos'>
                    <img className='about__photos_image' src={img1} alt='Waxing' />
                    <img className='about__photos_image' src={img1} alt='Waxing' />
                    <img className='about__photos_image' src={img1} alt='Waxing' />
                </div>
            </div>
        </section>
    )
}
