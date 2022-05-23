import React from 'react';

const MainButton = ({ children }) => {
    return (
    
             <button className='btn hover:bg-orange-400 hover:text-black border-0'>{ children }</button>
           

  
    );
};

export default MainButton;