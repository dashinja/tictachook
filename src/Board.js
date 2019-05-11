import React from 'react'
import Square from './Square'

export default function Board({board, onSquareClick}) {

  return (
    <div className="board">
      {board.map((symbol, index) => 
        <Square 
          key={index} 
          symbol={symbol} 
          onClick={() => onSquareClick(index)} />)}
    </div>
  )
}
