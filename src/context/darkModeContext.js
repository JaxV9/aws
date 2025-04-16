// src/context/darkModeContext.js
import { provide, reactive } from 'vue';

export function useDarkModeProvider() {
  const darkMode = reactive({
    isDarkMode: false,
    toggle() {
      darkMode.isDarkMode = !darkMode.isDarkMode;
      document.body.classList.toggle('dark-mode', darkMode.isDarkMode);
      localStorage.setItem('darkMode', darkMode.isDarkMode);
    },
    init() {
      const saved = localStorage.getItem('darkMode');
      darkMode.isDarkMode = saved === 'true';
      document.body.classList.toggle('dark-mode', darkMode.isDarkMode);
    }
  });

  provide('darkMode', darkMode);
  return darkMode;
}
