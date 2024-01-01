// ./src/components/App.js
import React, { useState } from 'react';

const App = () => {
    const [counter, setCounter] = useState(0);

    return (
        <div>
            <button 
                onClick={ e => setCounter(counter + 1) }
                >{ counter }</button>
        </div>
    )
}

export default App;