import React from 'react'
import { Link } from 'react-router-dom'

import Navbar from '../../components/navbar/Navbar'

import './MainPage.scss'

const MainPage = () => {
    const links = [
        { text: 'О нас', url: '/' },
        { text: 'Контакты', url: '/' },
        { text: 'Студентам', url: '/' },
        { text: 'Определить свой уровень', url: '/level-define' },
        { text: 'Логин', url: '/' }
    ]

    return (
        <div className="main">
            <Navbar links={links} />
            <header className="intro">
                <div className="intro__main">
                    <div className="intro__main-text">YOUR JOURNEY TO SUCCESS BEGINS NOW!</div>
                </div>
            </header >

            <section className="intro__footer">
                <a className="intro__footer-item"><span>Beginner</span></a>
                <a className="intro__footer-item"><span>Elementary</span></a>
                <a className="intro__footer-item"><span>Pre Intermediate</span></a>
                <a className="intro__footer-item"><span>Intermediate</span></a>
                <a className="intro__footer-item"><span>Upper Intermediate</span></a>
                <a className="intro__footer-item"><span>Advanced</span></a>
                <a className="intro__footer-item"><span>Toefl</span></a>
                <a className="intro__footer-item"><span>For kids</span></a>
            </section>

            <section class="learn">
                <div class="learn__stats">
                    <div class="learn__stats-item">
                        <a ><img src="../assets/stats3.png" /></a>
                        <div>Количество Видео</div>
                    </div>
                    <div class="learn__stats-item">
                        <a><img src="../assets/stats1.png" /></a>
                        <div>Количество<br />Практических<br />Материалов</div>
                    </div>
                    <div class="learn__stats-item">
                        <a><img src="../assets/stats2.png" /></a>
                        <div>Количество Часов за<br />Просмотром Видео<br />Уроков</div>
                    </div>
                </div>
                <div class="learn__start">Начать<br />изучение<br />сейчас</div>
                <div class="learn__start-btn-wrapper">
                    <Link class="learn__start-btn" to="/start">Начать</Link>
                </div>
                <div class="learn__social-wrapper">
                    <div class="learn__social">
                        <div class="learn__social-text">Follow us</div>
                        <div class="learn__social-img">
                            <a><img src="../assets/insta.png" /></a>
                            <a><img src="../assets/fb.png" /></a>
                            <a><img src="../assets/twitter.png" /></a>
                            <a><img src="../assets/linkedin.png" /></a>
                            <a><img src="../assets/vk.png" /></a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="contacts">
                <div>Адрес и телефон</div>
            </section>
        </div>
    )
}

export default MainPage
