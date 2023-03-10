import React from "react"
import { Link } from "react-router-dom"
import  "../Styles/Apod.css"

const Apod = () => {

    return(
        <>
        <div>
       <div className="apod-header">
        <h3>Astronomy Picturs of the Day</h3>
       </div>
       <div className="apod-sub-header">
        <span><Link>Discover of cosmos!</Link>Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation written by a professional astronomer.</span>
       </div>
        </div>
        </>
    )
}

export default Apod