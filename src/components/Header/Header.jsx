import React from 'react'
import './Header.scss'

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
                    <p className='block-online__main-text'>irina_volosnet</p>
                    <p className='block-online__main-text-description'>студия депиляции</p>
                    <p className='block-online__main-text-motto'>Лечу зависимость от бритвы</p>
                    <button className='block-online__button'>Записаться онлайн</button>
                </div>
            </div>
        </div>
    )
}
