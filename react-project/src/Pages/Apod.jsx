import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import  "../Styles/Apod.css"
import axios from "axios"

const Apod = () => {

    const [data,setData] = useState([])
    const [data1,setData1] = useState([])

    const time_data = new Date()
    const date = time_data.getFullYear() + "-" + (time_data.getMonth() + 1<10?"0"+(time_data.getMonth() + 1):time_data.getMonth() + 1) + "-" + (time_data.getDate()<10?"0"+time_data.getDate():time_data.getDate())
    console.log(date)

     const api = "https://lazy-jade-octopus-tie.cyclic.app/searchingYard/get";
     const post_data_to_backend = "https://lazy-jade-octopus-tie.cyclic.app/searchingYard/post";
     const nasa_api="https://api.nasa.gov/planetary/apod?api_key=JeD3EqEdP0z2MiyGjnhYoFlmXDGUI9DVbXjLBoMW&date=${date}";
     
     useEffect(() => {
     axios.get(api).then((res)=>{return setData(res.data),console.log("backend data--",res.data)})
     }, [])

     const filtered_data = data.filter((item)=>item.date==date)
     console.log("filtered-data",filtered_data)
     



    return(
        <>
        <div>
       <div className="apod-header">
        <h3>Astronomy Picturs of the Day</h3>
       </div>
       <div className="apod-sub-header">
        <span><Link>Discover of cosmos!</Link>Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation written by a professional astronomer.</span>
       </div>
       {
        filtered_data.length>0?filtered_data.map((item)=>{
            return(
                <div key={item._id}>
                    <p>{item.date}</p>
                    <img style={{height:"700px",width:"90%"}} src={item.hdurl} alt="hd-url"/>
                    <p>{item.title}</p>
                     <p>Image Credit & Copyright:{item.copyright}</p>
                     <p>Explanation: {item.explanation}</p>
                </div>
            )
        }):""
       }
       

        </div>
        </>
    )
}

export default Apod