const Counter = () => {
    const [count, setCount] = React.useState(0);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}
                style={{ marginLeft: '8px' , color: 'white' , backgroundColor: 'green' }}> + </button>
            <button onClick={() => setCount(count - 1)} 
            style={{ marginLeft: '8px' , color: 'white' , backgroundColor: 'red' }}> - </button>
        </div>
    );
}

window.Counter = Counter;