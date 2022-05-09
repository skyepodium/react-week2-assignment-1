import React, { useState } from 'react';

import ClickmeButton from './ClickmeButton';
import NumberButton from './NumberButton';

export default function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  function handleClickNumber(number) {
    setCount(count + number);
  }

  return (
    <div>
      <p>Counter</p>
      <ClickmeButton count={count} onClick={handleClick}>
        Click me! (
        {count}
        )
      </ClickmeButton>
      <NumberButton onClick={handleClickNumber} />
    </div>
  );
}
