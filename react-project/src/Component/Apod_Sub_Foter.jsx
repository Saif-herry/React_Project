import React from 'react'
import { AiOutlineRight } from 'react-icons/ai'
import { AiOutlineLeft } from 'react-icons/ai'
import { Link } from 'react-router-dom'
const Apod_Sub_Foter = () => {
  return (
    <div className='apod-sub-foter'>
      <hr />
      {/* <br/> */}
      <AiOutlineLeft style={{marginBottom:"-3px"}} />|<Link to="/archive">Archive</Link> | <Link>Submissions</Link> |{' '}
      <Link to='/index'>index</Link> | <Link>Search</Link> | <Link>Calendar</Link> |{' '}
      <Link>RSS</Link> | <Link>Education</Link> | <Link>About APOD</Link> |{' '}
      <Link>Discuss</Link> |
      <AiOutlineRight style={{marginBottom:"-3px"}} />
      {/* <br/> */}
      <br/>
      <hr />
    </div>
  )
}

export default Apod_Sub_Foter
