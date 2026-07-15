'use strict';

const themeToggle = document.querySelector('[data-theme-toggle]');
const root = document.documentElement;

const updateThemeToggle = () => {
  const isLight = root.dataset.theme === 'light';
  themeToggle.setAttribute('aria-pressed', String(isLight));
  themeToggle.setAttribute('aria-label', isLight ? 'Switch to dark mode' : 'Switch to light mode');
  themeToggle.title = isLight ? 'Dark mode' : 'Light mode';
};

themeToggle.addEventListener('click', () => {
  const nextTheme = root.dataset.theme === 'light' ? 'dark' : 'light';

  if (nextTheme === 'light') {
    root.dataset.theme = 'light';
  } else {
    delete root.dataset.theme;
  }

  try {
    localStorage.setItem('theme', nextTheme);
  } catch (error) {}

  updateThemeToggle();
});

updateThemeToggle();
