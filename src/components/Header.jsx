import { useState } from 'react';
import logo from '../assets/logos/logo.svg';

const Header = () => {
  const [trigger, setTrigger] = useState(false);

  return (
    <header className="navbar">
      <ul
        className={!trigger ? 'navbar-list' : 'navbar-list active'}
        onClick={() => setTrigger(false)}
      >
        <div>
          <li>
            <a href="#top">Top</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </div>
      </ul>
      <nav className="navbar-container">
        <a href="#top">
          <img
            className="z-20 relative logo"
            src={logo}
            alt="logo"
            onClick={() => setTrigger(false)}
          />
        </a>
        <div className="navbar-toggle" onClick={() => setTrigger(!trigger)}>
          <div
            className={
              !trigger
                ? 'navbar-toggle-inside z-20'
                : 'navbar-toggle-inside active z-20'
            }
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
