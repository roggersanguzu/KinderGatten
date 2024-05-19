import React from 'react'
import './Title.css'

const Title = ({subtitle,title}) => {
  return (
    <div className='titl'>
         <h4>{subtitle}</h4>
        <h1>{title}</h1>
    </div>
  )
}

export default Title
