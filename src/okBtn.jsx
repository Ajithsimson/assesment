import React from 'react';

const Okeybtn = ({ onShowMessage }) => {
  return (
    <div>
     
      
      <button onClick={() => {
        onShowMessage('Okey button clicked');
       
      }} style={{
        padding:'10px',
        margin:'10px',
        backgroundColor: '#007bff', 
        borderRadius: '8px',

      }} >Okey</button>
      
    </div>
  );
};

export default Okeybtn;
