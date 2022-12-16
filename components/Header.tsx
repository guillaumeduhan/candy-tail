'use client';

import { useEffect, useState } from 'react';
import { Moon } from './_icons/Moon';
import { Sun } from './_icons/Sun';

export default function Header() {
  const size = '28px';
  const [theme, setTheme] = useState<any>('light');
  const colorTheme = theme === 'dark' ? 'light' : 'dark';

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);
    if (localStorage) {
      setTheme(localStorage.getItem('theme'));
      localStorage.setItem('theme', theme);
    }
  }, [theme]);

  const switchTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  // const setFramework = (e: React.UIEvent<'type of element', UIEvent>) => {
  //   localStorage.setItem('framework', e.target.value);
  // };

  return (
    <header className="w-full border-b border-astro">
      <nav className="flex items-center justify-between w-full px-5 py-4">
        <div className="mr-2">
          <a href="/">Candytail.dev</a>
        </div>
        <div className="flex space-x-4">
          {/* <select
            className="bg-transparent dark:text-white outline-0"
            onChange={setFramework}
          >
            <option>React</option>
            <option>Vue</option>
          </select>" */}
          <div
            className="transition cursor-pointer hover:text-primary-600"
            onClick={switchTheme}
          >
            {theme === 'light' ? (
              <Moon width={size} height={size} />
            ) : (
              <Sun width={size} height={size} />
            )}
          </div>
          {/* <a href="/docs" className="mx-2">Docs</a>
          <a href="/docs" className="mx-2">Generator</a> */}
        </div>
      </nav>
    </header>
  );
}
