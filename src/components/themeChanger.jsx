import { useState, useEffect } from 'react';
import { RiMoonLine, RiSunLine } from 'react-icons/ri/index.js';
import { useTheme } from 'next-themes';

const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false);

  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <button
        onChange={(e) => setTheme(e.target.value)}
        className="w-8 h-8 flex items-center justify-center bg-transparent rounded-2xl dark:bg-transparent ease-in transition-all duration-300 focus:outline-none"
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        aria-label="Toggle Dark Mode"
      >
        {theme === 'dark' ? (
          <RiMoonLine size={30} color='#1A3A5F' />
        ) : (
          <RiSunLine size={30} color="#1A3A5F" />
        )}
      </button>
    </>
  );
};

export default ThemeChanger;
