// ./src/components/App.js
import React, { useEffect, useState } from 'react';

const App = () => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        setInterval(() => {
            setCounter(value => value + 1);
        }, 1000);
    }, []);

    return (
        <div>{ counter }</div>
    )
}

export default App;