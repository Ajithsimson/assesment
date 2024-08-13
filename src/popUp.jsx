import React from 'react';

const Popup = ({ type, onCancel, onConfirm }) => {
  return (
    <div style={styles.overlay}>
      <div style={styles.popup}>
        <p>Are you sure want to cancel</p>
        <div style={styles.buttons}>
          {type === 'confirm' && (
            <button onClick={onConfirm} style={styles.button}>Confirm</button>
          )}
          <button onClick={onCancel} style={styles.button}>OK</button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
  },
  popup: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
    textAlign: 'center',
  },
  buttons: {
    marginTop: '20px',
  },
  button: {
    margin: '0 10px',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#007bff',
    color: '#fff',
    cursor: 'pointer',
  },
};

export default Popup;