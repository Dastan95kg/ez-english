import React from 'react'

import './LevelDefinePage.scss'

const LevelDefinePage = () => {
    return (
        <div class="test">
            <div class="container">
                <div class="test__intro">
                    <h2>Определение уровня вашего языка</h2>
                    <p>Данный тест поможет определить ваш уровень Английского языка.</p>
                    <p>Тест состоит из 50 вопросов. Оптимальная скорость решения одного вопроса составляет от 15 до 25
                    секунд.
                    </p>
                    <p>Этот тест должен занять 20 – 25 минут, однако это не критически важный критерий.</p>
                    <p>Для выявления действительного уровня рекомендуется не использовать переводчики или помощь друзей.
                    Тогда,
                    вы получите реальную картину уровня вашего Английского языка.</p>
                    <p>Также не рекомендуется отвечать наугад.</p>
                    <div>
                        <button type="button">Начать</button>
                    </div>
                </div>

                <div class="test__results">
                    <h3>Choose the best word to complete the sentence</h3>
                </div>
            </div>
        </div>
    )
}

export default LevelDefinePage
