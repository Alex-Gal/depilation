import React from 'react'
import { ReactComponent as PhoneIcon } from '../../../icons/phone.svg'

import './Footer.scss'

export const Footer = () => {
  return (
    <div className='footer' id='contacts'>
      <div className="container">
        <footer className='contacts'>
          <div className='contacts__block'>
            <h3>Студия IRINA_VOLOSNET</h3>
            <div>
              <PhoneIcon className='nav__phone-icon' />
              <p>МТС +375292060068</p>
            </div>

          </div>
          <div className='contacts__block'></div>
          <div className='contacts__block'></div>
        </footer>
      </div>
    </div>
  )
}
