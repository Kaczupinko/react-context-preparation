// ./src/components/App.js
import React, { useEffect, useState } from 'react';

const App = () => {
    const [counter, setCounter] = useState(0);
    const [entered, setEntered] = useState(0);
    useEffect(() => {
        console.log("counter: ", counter);
    }, [counter]);

    useEffect(() => {
        document.title = `${counter} / ${entered}`;
        }, [counter, entered]);
    return (
        <div>
            <button
                onMouseEnter={ e => setEntered(entered + 1)}
                onClick={ e => setCounter(counter + 1) }
            >{ counter } / { entered}</button>
        </div>
    )
}

export default App;