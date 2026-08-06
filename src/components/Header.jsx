import React, { useState, useEffect } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={scrolled ? 'is-scrolled' : ''}>
      <div className="wrap nav">
        <a href="#" className="logo" onClick={() => setIsOpen(false)}>
          <span className="logo-mark" aria-hidden="true">
            <svg viewBox="0 0 44 44" width="26" height="26">
              <circle cx="22" cy="24" r="15" fill="#FFEFD9" />
              <path d="M22 8c3 0 5 2.4 5 5.4 0 2-1.2 3.3-2.6 4.2 1.7.2 3 .9 3 2-1.8 1-3.6.2-5.4.2s-3.6.8-5.4-.2c0-1.1 1.3-1.8 3-2-1.4-.9-2.6-2.2-2.6-4.2C17 10.4 19 8 22 8z" fill="#FFB800" />
              <circle cx="18.5" cy="25" r="2" fill="#2B2640" />
              <circle cx="25.5" cy="25" r="2" fill="#2B2640" />
              <path d="M20 29.5c1 1 3 1 4 0" stroke="#E85A30" strokeWidth="1.6" fill="none" strokeLinecap="round" />
              <path d="M22 24l3.2 1.4-3.2 1.4z" fill="#E85A30" />
            </svg>
          </span>
          <span>Ер-Талғат</span>
        </a>

        <nav className={`links ${isOpen ? 'open' : ''}`} id="navLinks">
          <a href="#about" onClick={() => setIsOpen(false)}>Біз туралы</a>
          <a href="#groups" onClick={() => setIsOpen(false)}>Топтар</a>
          <a href="#day" onClick={() => setIsOpen(false)}>Күн тәртібі</a>
          <a href="#trust" onClick={() => setIsOpen(false)}>Құжаттар</a>
          <a href="#contact" onClick={() => setIsOpen(false)}>Байланыс</a>
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <a href="#contact" className="btn btn-primary">Өтінім қалдыру</a>
          <button
            className="menu-toggle"
            id="menuBtn"
            aria-label="Меню"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>
    </header>
  );
}