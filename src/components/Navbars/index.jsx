import React from 'react';
import scss from './Navbars.module.scss';

export default function Navbars() {
  return (
    <div className={scss.container}>
      <nav>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Project</li>
            <li>Contact</li>
        </ul>
      </nav>
    </div>
  )
}
