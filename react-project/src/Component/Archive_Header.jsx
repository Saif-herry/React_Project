import React from 'react'
import { Link } from 'react-router-dom'
import "../Styles/Archive_Header.css"

const Archive_Header = () => {

  return (

    <div className='archive-Header'>
      <hr/>
      <div className='archive-Header-1'>
      | <Link> Index</Link>  |  <Link>Search</Link>  |  <Link> Today's Picture</Link>   |
      </div>
      <hr/>
      <div className='archive-Header-2'>
        <p>This archive list links to previous daily APOD pages from the current date through January 1, 2015. An archive of all existing APOD pages (current date through June 16, 1995) can be found here:<Link>APOD Full Archive.</Link></p>
      </div>
      <hr/>
    </div>
  )
}

export default Archive_Header
