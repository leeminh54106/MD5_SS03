import React, { useState } from 'react'

export default function MyTextArea() {
    const [text,setText] = useState('');
  return (
    <div>
        <textarea name="" id=""
        style={{resize:'none'}}
        onChange={(e) => setText(e.target.value)}>
            {text}
        </textarea>
        <p>{text.length}</p>
    </div>
  )
}
