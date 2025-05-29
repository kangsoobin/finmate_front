// src/components/SelectableButton.js
import React from 'react';

const SelectableButton = ({ label, isSelected, onClick }) => (
  <div
    onClick={onClick}
    style={{
      padding: '8px 14px',
      borderRadius: 17,
      background: isSelected ? '#E7F1F8' : '#FBFBFB',
      border: `1px solid ${isSelected ? '#71BDEF' : '#E2E2E2'}`,
      color: isSelected ? '#71BDEF' : 'black',
      fontWeight: 500,
      cursor: 'pointer',
    }}
  >
    {label}
  </div>
);

export default SelectableButton;

