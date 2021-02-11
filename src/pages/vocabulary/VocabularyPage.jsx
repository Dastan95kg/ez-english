import React, { useState } from 'react'

import Navbar from '../../components/navbar/Navbar'
import ResultItem from './ResultItem'
import './Vocabulary.scss'

const VocabularyPage = () => {
    let [word, setWord] = useState('')
    const [results, setResults] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            word = word.toLowerCase().trim()
            if (word) {
                const response = await fetch(`https://dictionary.skyeng.ru/api/public/v1/words/search?search=${word}`)
                const data = await response.json()
                if (data.length) {
                    setResults([...results, data[0]]);
                }
                setWord('')
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <Navbar />
            <div class="vocabulary">
                <form id="searchForm" onSubmit={handleSubmit}>
                    <h1>Vocabulary</h1>
                    <input
                        type="search"
                        class="vocabulary__input"
                        placeholder="Word to search"
                        value={word}
                        onChange={(e) => setWord(e.target.value)}
                    />
                    <input type="submit" />
                    <input type="reset" onClick={() => setResults([])} />
                </form>
                <div class="translation">
                    <h2>Translation</h2>
                    {results.length ? results.map(r => (
                        <ResultItem key={r.id} {...r} />
                    )) : ''}
                </div>
            </div>
        </>
    )
}

export default VocabularyPage
