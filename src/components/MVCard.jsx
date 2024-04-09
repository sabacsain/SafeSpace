import React from "react";

const MVCard = (props) => {
  return (
    <div
      className={`flex items-center gap-10 h-48 ${props.title === "Vision" && "flex-row-reverse"}`}
    >
      <div className='text-4xl text-secondary-200 text-center font-bold'>
        <img src={props.image} className="max-w-32 h-auto mb-3 rounded-full" />
        {props.title}
      </div>
      <p className='flex-1 flex items-center px-10 py-6 h-full bg-secondary-200 text-primary text-center rounded-2xl'>
        {props.children}
      </p>
    </div>
  );
};

export default MVCard;
