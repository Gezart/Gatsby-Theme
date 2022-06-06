import { Link } from 'gatsby'
import React from 'react'

const Banner = ({title, content, bannerButton}) => {
  return (
    <div className='banner'>
        <h1>{title}</h1>
        <p>{content}</p>
        <Link to={bannerButton.url}>{bannerButton.title}</Link>
    </div>
  )
}

//QYKY O PLAIN TEXT BRANCH

export default Banner