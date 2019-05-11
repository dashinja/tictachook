import React from 'react'

export default function Square({ symbol, onClick }) {
  return (
    <div className="square" onClick={onClick}>
      {symbol}
    </div>
  )
}
