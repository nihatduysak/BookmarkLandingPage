import { useState } from 'react'
import Header from './components/Header'
import Jobs from './components/Jobs'

function App() {


    return (
        <>
            <Header />
            <div className="container">
                <Jobs />
            </div>
        </>
    )
}

export default App
