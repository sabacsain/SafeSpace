import React, { useState } from 'react';

const PokeCard = props => {
  const [flipped, setFlipped] = useState(false);
  const [hovered, setHovered] = useState(false);

  const handleTitleClick = (e) => {
    e.stopPropagation();
  };

  const handleTitleHover = () => {
    setHovered(true);
  };

  const handleTitleLeave = () => {
    setHovered(false);
  };

  const handleClick = () => {
    setFlipped(!flipped);
  };

  return (
    <div className={`mx-auto relative w-64 h-96 bg-primary rounded-2xl border border-primary-500 border-opacity-50 transition-transform duration-300 ease-in-out hover:scale-105 shadow-xl overflow-hidden bg-opacity-10 backdrop-filter backdrop-blur-lg hover:bg-opacity-20 transform-glassmorphic`} style={{ boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.4)', transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}>
      <div
        className={`absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center p-6 rounded-2xl ${flipped ? 'hidden' : 'block'}`}
        onClick={handleClick}
      >
        <img src={props.image} className="mx-auto h-28 mb-3" />
        <a href={props.link} target="_blank" className={`text-xl font-semibold pb-3 border-b-2 border-secondary-200 text-secondary-200 ${hovered ? 'text-accent' : ''}`} onClick={handleTitleClick} onMouseEnter={handleTitleHover} onMouseLeave={handleTitleLeave}>{props.title}</a>
      </div>
      <div
        className={`absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center p-6 rounded-2xl ${flipped ? 'block' : 'hidden'}`}
        onClick={handleClick}
        style={{ transform: `scaleX(${flipped ? '-1' : '1'})`, transition: 'transform 0.5s ease' }}
      >
        <p className="text-s text-center">{props.children}</p>
      </div>
    </div>
  );
};

export default PokeCard;
