import * as React from 'react';
import './style.css';

export default function App() {
  return (
    <div>
      <nav>
        <div>
          <img width="12px" height="12px" src="./logo.svg" alt="logo" />
        </div>
      </nav>
      <div>
        <h1>Fun Facts About React</h1>
        <ul>
          <li>Its composable</li>
          <li>Its declarative</li>
          <li>Its hirable</li>
          <li>Its maintained by high skilled people</li>
        </ul>
      </div>
      <div></div>
    </div>
  );
}
