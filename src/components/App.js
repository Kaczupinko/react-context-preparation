// ./src/components/App.js
import React, { useState } from 'react';

const App = () => {
    const [counter, setCounter] = useState(0);
    const handleClick = e => {
        setCounter(counter + 1);
    }

    return (
        <div>
            <button 
                onClick={ handleClick }
            >{ counter }</button>
        </div>
    )
}

export default App;