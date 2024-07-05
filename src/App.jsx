import React, { useState } from 'react'
import Navbar from './components/Navbar'
import NewsBoard from './components/News-Board'

function App() {
    const [category, setCategory] = useState('health');

    return (
        <div>
            <Navbar setCategory={setCategory} />
            <NewsBoard category={category} />
        </div>
    )
}

export default App