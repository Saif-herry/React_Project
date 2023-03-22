import React, { useEffect, useState } from 'react'
import "../Styles/Searching.css"
import axios from 'axios'

const Searching = () => {
    const [data,setData] = useState('')
    const [apidata,setApiData] = useState([])

    const api = 'https://lazy-jade-octopus-tie.cyclic.app/searchingYard/get';

    useEffect(() => {
    axios.get(api).then((res)=>{return setApiData(res.data)})
    }, [])

    console.log("data",data)
    
    const Find_the_word = ()=>{
      const filtered_Data = apidata.filter((item)=>{return item.date==data||item.copyright==data || item.explanation==data|| item.title==data|| item.media_type==data
      })
  
      console.log('filtered-data',filtered_Data)
      setData("")
    }

  return (
    <div className='searching-parent'>

      <div className='searching-header'>
        <div>
          <img src="https://apod.nasa.gov/apod/apod.gif" alt="searching-img"/>
        </div>
        <div>
          <h1>Astronomy Picture of the Day</h1>
          <h1 style={{marginTop:"-20px"}}>Searchable Archive</h1>
        </div>
      </div>
      <hr/>

      <div className='searching-section-1'>
       <div className='searching-section-1-top'>

        <p>Type text you would like to search for here:</p>

        <input type='text' value={data} onChange={(e)=>setData(e.target.value)}/>
       </div>

       <div className='searching-section-1-bottom'>
        <button onClick={Find_the_word}>Find The Words</button>
        <button type="">Clear the form</button>
       </div>
      </div>
      <hr/>


    </div>
  )
}

export default Searching
