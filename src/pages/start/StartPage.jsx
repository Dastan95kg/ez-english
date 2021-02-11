import React from 'react'

import Navbar from '../../components/navbar/Navbar'
import './StartPage.scss'

const StartPage = () => {
    const links = [
        { text: 'Видео уроки', url: '/' },
        { text: 'Вокабуляр', url: '/vocabulary' },
        { text: 'Профиль', url: '/' }
    ]

    return (
        <>
            <Navbar links={links} />
            <section class="video">
                <div class="video__content">
                    <h2 class="video__title">Название темы</h2>
                    <video controls autoplay>
                        <source src="../assets/video/articles.mp4" type="video/mp4" />
                    </video>
                </div>
                <div class="video__notes">
                    <h2 class="video__title">Заметки</h2>
                    <div class="video__notes-textarea-wrapper">
                        <textarea placeholder="Заметки студента по теме"></textarea>
                    </div>
                    <div class="video__notes-buttons">
                        <a class="save-note" href="#">сохранить</a>
                        <a class="done" href="#">
                            урок освоен
                        <input type="checkbox" />
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default StartPage
