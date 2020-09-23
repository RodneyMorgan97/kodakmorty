import React, { useState } from 'react';
import Burger from '@animated-burgers/burger-squeeze';
import '@animated-burgers/burger-squeeze/dist/styles.css';

import './Hamburger.css';

export default function Hamburger() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleHamburger = () => { setIsMenuOpen(!isMenuOpen) }

  return (
    <div className="container" onClick={toggleHamburger}>
      <Burger isOpen={isMenuOpen} />
    </div>
  );
}
