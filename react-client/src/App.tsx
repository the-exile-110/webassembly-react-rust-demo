import React, {useState} from 'react';
import './App.css';

function App() {
    // @ts-ignore
    import('wasm').then(({add_two_ints, fib}) => {
        // off-loading computations to WASM
        const sumResult = add_two_ints(10, 20);
        const fibResult = fib(10);
        // updating our sumResult and fibResult values (declared below)
        setSum(sumResult);
        setFib(fibResult);
    });
    const [sum, setSum] = useState<number>(0);
    const [fib, setFib] = useState<number>(0);
    return (
        <div className="App">
            <div>Sum Results: {sum}</div>
            <div>Fib Results: {fib}</div>
        </div>
    );
}

export default App;