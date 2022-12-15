import React from 'react'
import './Tags.css';


function TagsList({tag}) {
  return (
    <div className='tag'>
      <h5>{tag.title}</h5>
      <p>{tag. discription}</p>
    </div>
  )
}

export default TagsList
