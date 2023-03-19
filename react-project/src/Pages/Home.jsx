import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import "../Styles/Apod.css"
import Apod_Sub_Foter from '../Component/Apod_Sub_Foter'
import Apod_Foter from '../Component/Apod_Foter'

const Home = () => {
  const [data,setData] = useState([])
const navigate = useNavigate()
  const {id} = useParams()
  console.log(id)

  const api = `https://lazy-jade-octopus-tie.cyclic.app/searchingYard/get/${id}`;

  useEffect(() => {
      axios.get(api).then((res)=>{return setData(res.data),console.log(res.data)})
  }, [])

  return (
    <div className='parent-container'>
      <div className='apod-header'>
        <h3>Astronomy Picture of the Day</h3>
      </div>
      <div className='apod-sub-header'>
        <span>
          <Link to='/archive'>Discover of cosmos!</Link>Each day a different image or
          photograph of our fascinating universe is featured, along with a brief
          explanation written by a professional astronomer.
        </span>
      </div>
      <div>
        {/* { */}
          
              <div key={data._id} className='apodcontainer'>
                <p>{data.date}</p>
                <img src={data.hdurl} alt='hd-url' />
                <p style={{ fontWeight: 'bold' }}>{data.title}</p>
                <p className='crd-copyright'>
                  Image Credit &<Link> @ Copyright:{data.copyright} </Link>
                </p>
                <p className='crd-explanation'>
                  <span style={{ fontWeight: 'bold' }}>Explanation :</span>{' '}
                  {data.explanation}
                </p>
                <p className='crd-tommorow-picture'>
                  Tomorrow's picture:<Link>along the ridge</Link>
                </p>
                <Apod_Sub_Foter/> 
                {/* <br/> */}
                <Apod_Foter/>
              </div>
           
        {/* } */}
      </div>
    </div>
  )
}

export default Home
