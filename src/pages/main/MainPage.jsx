import React from 'react'

import './MainPage.scss'

const MainPage = () => {
    return (
        <div className="main">
            <header className="intro">
                <nav className="intro__nav">
                    <a className="intro__nav-logo" href="./index.html">
                        <div className="ez">EZ</div>
                        <div className="english">ENGLISH</div>
                    </a>
                    <div className="intro__nav-links">
                        <a href="#" className="intro__nav-link">
                            <span>О нас</span>
                        </a>
                        <a href="#" className="intro__nav-link">
                            <span>Контакты</span>
                        </a>
                        <a href="#" className="intro__nav-link">
                            <span>Студентам</span>
                        </a>
                        <a href="./test.html" className="intro__nav-link">
                            <span>Определить свой уровень</span>
                        </a>
                        <a href="#" className="intro__nav-link">
                            <span>Логин</span>
                        </a>
                    </div>
                    <div className="burger-menu">
                        <svg width="15px" height="15px" version="1.1" id="Capa_1" xmlns="https://www.w3.org/2000/svg"
                            xmlnsXlink="https://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 469.333 469.333"
                            xmlSpace="preserve">
                            <g>
                                <path d="M53.333,106.667H416c29.417,0,53.333-23.927,53.333-53.333S445.417,0,416,0H53.333C23.917,0,0,23.927,0,53.333
				S23.917,106.667,53.333,106.667z" />
                                <path d="M416,181.333H53.333C23.917,181.333,0,205.26,0,234.667S23.917,288,53.333,288H416c29.417,0,53.333-23.927,53.333-53.333
				S445.417,181.333,416,181.333z" />
                                <path d="M416,362.667H53.333C23.917,362.667,0,386.594,0,416s23.917,53.333,53.333,53.333H416
				c29.417,0,53.333-23.927,53.333-53.333S445.417,362.667,416,362.667z" />
                            </g>
                        </svg>
                    </div>
                </nav>
                <div className="intro__main">
                    <div className="intro__main-text">YOUR JOURNEY TO SUCCESS BEGINS NOW!</div>
                </div>
            </header >

            <section className="intro__footer">
                <a href="#" className="intro__footer-item"><span>Beginner</span></a>
                <a href="#" className="intro__footer-item"><span>Elementary</span></a>
                <a href="#" className="intro__footer-item"><span>Pre Intermediate</span></a>
                <a href="#" className="intro__footer-item"><span>Intermediate</span></a>
                <a href="#" className="intro__footer-item"><span>Upper Intermediate</span></a>
                <a href="#" className="intro__footer-item"><span>Advanced</span></a>
                <a href="#" className="intro__footer-item"><span>Toefl</span></a>
                <a href="#" className="intro__footer-item"><span>For kids</span></a>
            </section>

            <section class="learn">
                <div class="learn__stats">
                    <div class="learn__stats-item">
                        <a href="#"><img src="../assets/stats3.png" /></a>
                        <div>Количество Видео</div>
                    </div>
                    <div class="learn__stats-item">
                        <a href="#"><img src="../assets/stats1.png" /></a>
                        <div>Количество<br />Практических<br />Материалов</div>
                    </div>
                    <div class="learn__stats-item">
                        <a href="#"><img src="../assets/stats2.png" /></a>
                        <div>Количество Часов за<br />Просмотром Видео<br />Уроков</div>
                    </div>
                </div>
                <div class="learn__start">Начать<br />изучение<br />сейчас</div>
                <div class="learn__start-btn-wrapper">
                    <a class="learn__start-btn" href="./main.html">Начать</a>
                </div>
                <div class="learn__social-wrapper">
                    <div class="learn__social">
                        <div class="learn__social-text">Follow us</div>
                        <div class="learn__social-img">
                            <a href="#"><img src="../assets/insta.png" /></a>
                            <a href="#"><img src="../assets/fb.png" /></a>
                            <a href="#"><img src="../assets/twitter.png" /></a>
                            <a href="#"><img src="../assets/linkedin.png" /></a>
                            <a href="#"><img src="../assets/vk.png" /></a>
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
