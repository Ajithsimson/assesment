import React, { useState } from 'react';
import Okeybtn from './okBtn'
import CancelBtn from './cancelBtn';
import Popup from './popUp'

const Dashboard = () => {
  const [popup, setPopup] = useState(null);
  const [message, setMessage] = useState('');
  const [cancelClicked, setCancelClicked] = useState(false);

  const handleShowMessage = (msg) => {
    setMessage(msg);
  };

const handleCancelClick = ()=>{
  setPopup(true);
}






  const showConfirm = () => {
    setPopup({
      type: 'confirm',
      message: 'Are you sure?',
    });
    
  };
   

  const handleConfirm = () => {
   setCancelClicked(true);
   setPopup(false)
    // alert('Okey has been Clicked');
    // setPopup(null);
  };

 
 


  const closePopup = () => {
    setPopup(null);
   
  };

  return (
    <div>
      <h1 style={{
        fontSize: '2.5em',
        color: '#333', 
        textAlign: 'center', 
        marginBottom: '20px', 
        fontFamily: 'Arial, sans-serif', 
        fontWeight: 'bold', 
      }}>Dashboard</h1>
      <div style={{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        
      }}>
      <Okeybtn  onShowMessage={handleShowMessage} />
      
      {message && <p>{message}</p>}
       
       <CancelBtn  onCancel={showConfirm} />
      
      </div>
      {popup && (
        <Popup
          type={popup.type}
          message={popup.message}
          onClose={popup.type === 'alert' ? closePopup : null}
          onConfirm={popup.type === 'confirm' ? closePopup : null}
          
        />
      )}
    </div>
  );
};

export default Dashboard;
