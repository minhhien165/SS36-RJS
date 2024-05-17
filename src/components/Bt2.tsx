import React, { useState } from 'react';

export default function CountClick() {
  const [clickCount, setClickCount] = useState<number>(0);

  const handleClick = () => {
    const newClickCount = clickCount + 1;
    setClickCount(newClickCount);
    document.title = `click ${newClickCount} lần`;
  };

  return (
    <div>
      Bt2
      <button onClick={handleClick}>Click {clickCount} lần</button>
    </div>
  );
}