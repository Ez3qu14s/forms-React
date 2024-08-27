import React from 'react';

function RadioComponent({ options, value, setValue }) {
  return (
    <>
      {options.map((option) => (
        <label>
          <input
            type="radio"
            value={option}
            checked={value === option}
            onChange={({ target }) => setValue(target.value)}
          />
          {option}
        </label>
      ))}
    </>
  );
}

export default RadioComponent;
