import React from 'react'
import { Footer } from '../Footer/Footer'
import { Header } from '../Header/Header'
// import firstBlockPicture from '../../img/firstBlockPicture.jpg';

import './MainPage.scss'

export const MainPage = () => {
  return (
    <>
      <Header />
      <main className='main'>
        <section className='block_1'>
          {/* <img className='firstBlockPicture' src={firstBlockPicture} alt="depilation" /> */}
          <div className='block_1__online'>
            <p>IRINA_VOLOSNET</p>
            <p>студия депиляции</p>
            <p>Лечу зависимость от бритвы</p>
            <button>Онлайн запись</button>
          </div>
        </section>
        <section className='block_2'>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio esse voluptas excepturi earum repudiandae ipsa, 
            a culpa temporibus explicabo perspiciatis suscipit doloremque quod fuga laboriosam quam inventore odio adipisci rem.</p>
        </section>
      </main>
      <Footer />
    </>
  )
}
