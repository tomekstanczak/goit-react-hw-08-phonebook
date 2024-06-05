import React, { useEffect, useState } from 'react';
import css from './Buttons.module.css';

export const Buttons = () => {
  const [pressedKey, setPressedKey] = useState(null);

  useEffect(() => {
    const handleKeyPress = e => {
      const key = e.key.toLowerCase();
      const mapping = {
        1: ['a', 'b', 'c', '1'],
        2: ['d', 'e', 'f', '2'],
        3: ['g', 'h', 'i', '3'],
        4: ['j', 'k', 'l', '4'],
        5: ['m', 'n', 'o', '5'],
        6: ['p', 'q', 'r', '6'],
        7: ['s', 't', 'u', '7'],
        8: ['v', 'w', 'x', '8'],
        9: ['y', 'z', '9'],
        0: ['0'],
      };
      const matchingKey = Object.keys(mapping).find(k =>
        mapping[k].includes(key)
      );
      if (matchingKey) {
        setPressedKey(matchingKey);
        handleButtonClick(matchingKey);
      }
    };

    const handleKeyRelease = () => {
      setPressedKey(null);
    };

    window.addEventListener('keydown', handleKeyPress);
    window.addEventListener('keyup', handleKeyRelease);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
      window.removeEventListener('keyup', handleKeyRelease);
    };
  }, []);

  const handleButtonClick = key => {
    console.log(`Button or key pressed: ${key}`);
  };

  return (
    <div className={css.buttonsContainer}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map(number => (
        <button
          key={number}
          className={`${css.buttonStyle} ${
            pressedKey === number.toString() ? css.pressed : ''
          }`}
          type="button"
          onMouseDown={() => setPressedKey(number.toString())}
          onMouseUp={() => setPressedKey(null)}
          onClick={() => handleButtonClick(number.toString())}
        >
          {number}
        </button>
      ))}
    </div>
  );
};
