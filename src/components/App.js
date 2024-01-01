// ./src/components/App.js
import React, { useEffect, useState } from 'react';

const App = () => {
    const [counter, setCounter] = useState(0);
    useEffect(() => {
        console.log("counter: ", counter);
    }, []);

    return (
        <div>
            <button
                onClick={ e => setCounter(counter + 1) }
            >{ counter }</button>
        </div>
    )
}

export default App;