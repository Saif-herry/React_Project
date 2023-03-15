import React from 'react'
import { Link } from 'react-router-dom'

const Apod_Foter = () => {
  return (
    <div className='apod_foter'>
      <p style={{fontWeight:"bold"}}>Authors & editors:<Link> Robert Nemiroff (MTU) </Link>& <Link>Jerry Bonnell (UMCP)</Link></p>
      <p><span style={{fontWeight:"bold"}}>NASA Official:</span> Phillip Newman <Link>Specific rights apply.</Link></p>
      <p style={{fontWeight:"bold"}}><Link>NASA Web Privacy Policy and Important Notices</Link></p>
      <p><span style={{fontWeight:"bold"}}>A service of:</span> <Link>ASD</Link> at <Link>NASA / GSFC,</Link></p>
      <p style={{fontWeight:"bold"}}><Link>NASA Science Activation</Link></p>
      <p style={{fontWeight:"bold"}}>& <Link>Michigan Tech. U.</Link></p>
    </div>
  )
}

export default Apod_Foter