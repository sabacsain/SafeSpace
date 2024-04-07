import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MainPages } from '../routes/paths';

const Button = props => {
  const navigate = useNavigate();
  return (
    <button 
      className={`h-fit px-8 py-2 font-semibold rounded-full drop-shadow-md transition-colors ease-in-out
                  ${props.style ? props.style : 'bg-secondary-200 hover:bg-accent text-primary'}`}
      onClick={() => navigate(`${props.link}`)}
    >
        {props.children}
    </button>
  );
};

export default Button;