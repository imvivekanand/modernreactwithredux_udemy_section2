import React from 'react'

export default function App() {
    const inputType = 'number';
    const minValue = 5;
  return (
    <div>
      <input type={inputType} min={minValue}/>
    </div>
  )
}
