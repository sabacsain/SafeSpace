import React from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * Custom button
 * @param {route} link Move to a specific page. Use constants from paths.jsx 
 * @param {string} theme Optional. Either 'light' (white button) or 'dark' (blue button).
 * @param {string} customTheme Optional. Custom styling using Tailwind.
 */
const Button = ({ outsideLink, link, theme, customTheme, children, ...rest }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (outsideLink) {
      window.open(outsideLink, '_blank'); 
    } else {
      navigate(link); 
    }
  };

  return (
    <button 
      className={`h-fit px-8 py-2 font-semibold rounded-full drop-shadow-md transition-colors ease-in-out
                  ${theme === "light" && 'bg-primary hover:bg-tertiary-200 text-secondary-200'} 
                  ${theme === "dark" && 'bg-secondary-200 hover:bg-accent text-primary'}
                  ${(theme === undefined && customTheme === undefined) && 'bg-secondary-200 hover:bg-accent text-primary'}
                  ${customTheme}`
                }
      onClick={handleClick}
      {...rest}

    >
        {children}
    </button>
  );
};

export default Button;