import React from 'react';

function Input({ id, label, value, onChange, ...props }) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input type="text" id={id} value={value} onChange={onChange} {...props} />
    </>
  );
}

export default Input;
