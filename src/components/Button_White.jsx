import React from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * Custom button
 * @param {route} link Move to a specific page. Use constants from paths.jsx 
 * @param {string} theme Optional. Either 'light' (white button) or 'dark' (blue button).
 * @param {string} customTheme Optional. Custom styling using Tailwind.
 */
const Button_White = ({ link, theme, customTheme, children, ...rest }) => {
  const navigate = useNavigate();

  return (
    <button 
      className={`h-fit px-8 py-2 font-semibold rounded-full drop-shadow-md transition-colors ease-in-out
                  ${theme === "light" && 'bg-primary hover:bg-tertiary-200 text-secondary-200'} 
                  ${theme === "dark" && 'bg-secondary-200 hover:bg-accent text-primary'}
                  ${(theme === undefined && customTheme === undefined) && 'bg-primary hover:text-accent text-secondary-200'}
                  ${customTheme}`
                }
      onClick={() => navigate(link)}
      {...rest}
    >
        {children}
    </button>
  );
};

export default Button_White;