import React from 'react'
import { ReactComponent as PhoneIcon } from '../../../icons/phone.svg'
import { ReactComponent as AddressIcon } from '../../../icons/address.svg'

import './Footer.scss'

export const Footer = () => {
  return (
    <div className='footer' id='contacts'>
      <div className="container">
        <footer className='contacts'>
          <div className='contacts__block-left'>
            <h3 className='contacts__title'>Студия IRINA_VOLOSNET</h3>
            <div className='contacts__phone'>
              <PhoneIcon className='contacts__phone-icon' />
              <p className='contacts__phone-text'>МТС +375292060068</p>
            </div>
            <div className='contacts__address'>
              <AddressIcon className='contacts__address-icon' />
              <p className='contacts__address-text'>г. Кобрин, ул. Дружбы д.2, комната 20</p>
            </div>
          </div>

          <div className='contacts__block-center'>
            <h3 className='contacts__title'>Услуги</h3>
            <a href='/'>Восковая депиляция</a><br/>
            <a href='/'>Пилинг</a><br/>
            <button onClick={() => window.open('https://dikidi.net/448067', '_blank')} className='contacts__button-online'>Записаться онлайн</button>
          </div>

          <div className='contacts__block-right'>
            <h3 className='contacts__title'>Социальные сети</h3>
            <div className='social-webs'>
              <button onClick={() => window.open('https://www.instagram.com/irina_volosnet/?igshid=YmMyMTA2M2Y=', '_blank')} className='social-webs__instagram'><PhoneIcon className='contacts__phone-icon' /></button>
              <button onClick={() => window.open('https://t.me/+heBQoM6ez6BlZmZi', '_blank')} className='social-webs__telegram'>telega</button>
            </div>
            <button className='map'>Студия на карте</button>
          </div>
        </footer>
      </div>
    </div>
  )
}
