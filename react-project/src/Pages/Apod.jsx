import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Apod.css'
import axios from 'axios'
import Apod_Sub_Foter from '../Component/Apod_Sub_Foter'
import Apod_Foter from '../Component/Apod_Foter'

const Apod = () => {
  const [data, setData] = useState([])
  const [data1, setData1] = useState([])

  const time_data = new Date()
  const date =
    time_data.getFullYear() +
    '-' +
    (time_data.getMonth() + 1 < 10
      ? '0' + (time_data.getMonth() + 1)
      : time_data.getMonth() + 1) +
    '-' +
    (time_data.getDate() < 10 ? '0' + time_data.getDate() : time_data.getDate())
  console.log(date)

  const api = 'https://lazy-jade-octopus-tie.cyclic.app/searchingYard/get'
  const post_data_to_backend =
    'https://lazy-jade-octopus-tie.cyclic.app/searchingYard/post'
  const nasa_api =
    'https://api.nasa.gov/planetary/apod?api_key=JeD3EqEdP0z2MiyGjnhYoFlmXDGUI9DVbXjLBoMW&date=${date}'

  useEffect(() => {
    axios.get(api).then(res => {
      return setData(res.data), console.log('backend data--', res.data)
    })
  }, [])

  const filtered_data = data.filter(item => item.date == date)
  console.log('filtered-data', filtered_data)

  return (
    <div className='parent-container'>
      <div className='apod-header'>
        <h3>Astronomy Picture of the Day</h3>
      </div>
      <div className='apod-sub-header'>
        <span>
          <Link>Discover of cosmos!</Link>Each day a different image or
          photograph of our fascinating universe is featured, along with a brief
          explanation written by a professional astronomer.
        </span>
      </div>
      {filtered_data.length > 0
        ? filtered_data.map(item => {
            return (
              <div key={item._id} className='apodcontainer'>
                <p>{item.date}</p>
                <img src={item.hdurl} alt='hd-url' />
                <p style={{ fontWeight: 'bold' }}>{item.title}</p>
                <p className='crd-copyright'>
                  Image Credit &<Link> @ Copyright:{item.copyright} </Link>
                </p>
                <p className='crd-explanation'>
                  <span style={{ fontWeight: 'bold' }}>Explanation :</span>{' '}
                  {item.explanation}
                </p>
                <p className='crd-tommorow-picture'>
                  Tomorrow's picture:<Link>along the ridge</Link>
                </p>
                <Apod_Sub_Foter/> 
                {/* <br/> */}
                <Apod_Foter/>
              </div>
            )
          })
        : ''}
    </div>
  )
}

export default Apod
