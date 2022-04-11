import React from 'react'
import './Header.scss'

export const Header = () => {
    return (
        <div className='header'>
            <p className='header__logo'>IRINA_VOLOSNET</p>
            <nav className='header__nav'>
                <a href='#block_1'>Главная</a>
                <a href='#block_2'>Обо мне</a>
                <a href='./'>Курсы</a>
                <a href='./'>Прайс-лист</a>
                <a href='#block_3'>Контакты</a>
            </nav>
            <p className='header__par'>МТС +375292084163</p>
        </div>
    )
}
