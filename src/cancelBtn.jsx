import React from 'react';

const CancelBtn = ({ onAlert, onCancel }) => {
  return (
    <div>
    <button style={{
        padding:'10px',
        margin:'10px',
        backgroundColor: '#FF0000', 
        borderRadius: '8px',
    }} onClick={onCancel}>Cancel</button>
      
      
    </div>
  );
};

export default CancelBtn;
