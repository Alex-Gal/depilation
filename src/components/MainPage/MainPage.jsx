import React from 'react'
import { Footer } from '../Footer/Footer'
import { Header } from '../Header/Header'
// import firstBlockPicture from '../../img/firstBlockPicture.jpg';
// {/* <img className='firstBlockPicture' src={firstBlockPicture} alt="depilation" /> */}

import './MainPage.scss'

export const MainPage = () => {
  return (
    <>
      <Header />
      <main className='main'>
        <section className='about'>
          <div className="container">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Distinctio esse voluptas excepturi earum repudiandae ipsa,
              a culpa temporibus explicabo perspiciatis suscipit doloremque
              quod fuga laboriosam quam inventore odio adipisci rem.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
