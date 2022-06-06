import React from 'react'

const Text = ({title, content}) => {
    return (
    <div className='Text'>
        <h1>{title}</h1>
        <p>{content}</p>
    </div>
  )
}

export default Text
