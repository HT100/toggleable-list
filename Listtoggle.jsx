import React, { useState } from 'react';
import'./lists.css'
function ToggleableList({ title, items }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleList = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="list-container">
      <div className="list-title" onClick={toggleList}>
      {title}  {isOpen ? '-' : '+'} 
      </div>
      {isOpen && (
        <ul className="list-items">
          {items.map((item, index) => (
            <li key={index}>
              <label>
                <input type="checkbox" /> {item}
              </label>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ToggleableList;
