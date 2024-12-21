import React, { useState } from 'react';

function Counter({ initialCount, onCountChange }) {
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    const newCount = count + 1;
    setCount(newCount);
    onCountChange(newCount);
  };

  const decrement = () => {
    const newCount = count > 0 ? count - 1 : 0;
    setCount(newCount);
    onCountChange(newCount);
  };

  const restart = () => {
    setCount(0);
    onCountChange(0);
  };

  const switchSigns = () => {
    const newCount = count * -1;
    setCount(newCount);
    onCountChange(newCount);
  };

  return (
    <div>
      <h3 data-testid="count">{count}</h3>
      <button data-testid="increment" onClick={increment}>
        Increment
      </button>
      <button data-testid="decrement" onClick={decrement}>
        Decrement
      </button>
      <button data-testid="restart" onClick={restart}>
        Restart
      </button>
      <button data-testid="switchsign" onClick={switchSigns}>
        Switch Sign
      </button>
    </div>
  );
}

export default Counter;
