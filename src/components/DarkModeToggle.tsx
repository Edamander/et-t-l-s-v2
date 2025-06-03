
import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Switch } from './ui/switch';

const DarkModeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <div className="fixed top-1/2 right-4 -translate-y-1/2 z-50 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full p-2 shadow-lg border border-gray-200/50 dark:border-gray-700/50">
      <div className="flex flex-col items-center space-y-1">
        <span className="text-xs font-medium text-gray-600 dark:text-gray-300">🌞</span>
        <Switch 
          checked={isDarkMode} 
          onCheckedChange={toggleDarkMode}
          className="scale-75 rotate-90"
        />
        <span className="text-xs font-medium text-gray-600 dark:text-gray-300">🌙</span>
      </div>
    </div>
  );
};

export default DarkModeToggle;
