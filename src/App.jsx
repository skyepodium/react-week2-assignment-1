import React, { useState } from 'react';
import IncrementCounter from './IncrementCounter';
import CounterContainer from './CounterContainer';

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div>Counter</div>
      <IncrementCounter count={count} setCount={setCount} />
      <CounterContainer setCount={setCount} />
    </>
  );
};

export default App;
