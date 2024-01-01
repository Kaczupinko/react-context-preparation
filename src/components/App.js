// ./src/components/App.js
import React, { useState } from 'react';

const App = () => {
    const [counter, setCounter] = useState(0);
    const [isHover, setHover] = useState(false);
    const style = {border: `${isHover * 4}px solid red`}

    return (
        <div>
            <button
                style={style}
                onMouseEnter={ e => setHover(true) }
                onMouseLeave={ e => setHover(false) } 
                onClick={ e => setCounter(counter + 1) }
            >{ counter }</button>
        </div>
    )
}

export default App;