import React from 'react'
import { Link } from 'react-router-dom'

const Index_Sub_Header = () => {

  return (
    <div className='index-sub-header'>
        <hr/>
      <div>
|  <Link to='/'> Today's Picture</Link>| <Link to='/archive'> Archive</Link>  |  <Link>Search</Link>     |  <Link>Calendar</Link>     |
      </div>
      <hr/>
    </div>
  )
}

export default Index_Sub_Header
