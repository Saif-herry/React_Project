import React, { useEffect, useState } from 'react'
import "../Styles/Archive.css"
import Archive_Header from '../Component/Archive_Header'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Archive = () => {
  const [archiveData,setArchiveData] = useState([])

const api = 'https://lazy-jade-octopus-tie.cyclic.app/searchingYard/get';
  useEffect(() => {
  axios.get(api).then((res)=>{return setArchiveData(res.data.reverse()),console.log(res.data)})
  }, [])

  return (
    <div className='archive-parent'>
    <div className='Archive'>
      <img src="https://apod.nasa.gov/apod/apod.gif" alt="apod"/> 
      <h1>Astronomy Picture of the Day Archive</h1>
    </div>
    <div>
    <Archive_Header/>
    </div>
     <div>
      {
       archiveData.map((item)=>{
        return <div className='archive-data-card' key={item._id}>
          <p>{item.date} :</p>  <p><Link to={`/home/${item._id}`}>{item.title}</Link></p>
        </div>
       }) 
      }
     </div>
    </div>
  )

}

export default Archive
