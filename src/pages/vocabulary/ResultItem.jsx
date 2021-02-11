import React from 'react'

const ResultItem = ({ text, meanings }) => {
    return (
        <div class="translation__wrapper">
            <div class="translation__word">{text}</div>
            <div class="translation__result-wrapper">
                <ul class="translation__result">
                    {meanings.map(m => (
                        <li key={m.id}>{m.translation.text}</li>
                    ))}
                </ul>
                <div class="translation__audio">
                    <audio src={meanings[0].soundUrl} controls="" autoplay=""></audio>
                </div>
                <div class="translation__image-wrapper">
                    <img class="translation__image" src={meanings[0].imageUrl} />
                </div>
            </div>
        </div>
    )
}

export default ResultItem
