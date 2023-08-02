import React, { useState } from 'react';
import Header from '../Header';
import Body from '../body';

export default function Proopschangee() {
  const [showHeader, setShowHeader] = useState(false);

  return (
    <div>
      {showHeader ? <Header /> : <Body />}
      <button onClick={() => setShowHeader(true)}>Show Header</button>
      <button onClick={() => setShowHeader(false)}>Show Body</button>
    </div>
  );
}
