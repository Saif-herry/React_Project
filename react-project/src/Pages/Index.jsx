import React from 'react'
import '../Styles/Index.css'
import Index_Header from '../Component/Index_Sub_Header'
import Stars, { Sky } from"../Database/Index_Database"
import {Galaxies,Nebulae,Miscellaneous,Sun,Comets,Space,Space1} from "../Database/Index_Database"
import { Link } from 'react-router-dom'
import Apod_Foter from "../Component/Apod_Foter"


const Index = () => {
  
  return (
    <div className='Index-parent'>
      <div className='index-header'>
        <div>
          <img src='https://apod.nasa.gov/apod/apod.gif' alt='' />
        </div>
        <div>
          <h1>Astronomy Picture of the Day</h1>
          <h1 style={{ marginTop: '-20px', marginRight: '150px' }}>
            Index - Main Page
          </h1>
        </div>
      </div>
      <div>
        <Index_Header />
      </div>

      <div className='index-star'>
        <div className='index-star-left'>
           <div>
            <img src="https://apod.nasa.gov/apod/calendar/S_960823.jpg" alt=""/>
           </div> 
           <div>
            <h3 style={{fontSize:"24px"}}>Cosmos</h3>
           </div>
           <div>
            <img src="https://apod.nasa.gov/apod/calendar/S_960522.jpg" alt=""/>
           </div>
        </div>

        <div className='index-star-right'>
           <div className='star'>
            <span style={{marginTop:"16px"}}>Stars:</span>
           {
              Stars.map((item)=>{
                return <div className='star-sub-div'>
                    <p><Link>{item}</Link> *</p>
                </div>
              })  
            }
           </div>
           <div className='star'>
            <span style={{marginTop:"16px"}}>Galaxies:</span>
            {
              Galaxies.map((item)=>{
                return <div className='star-sub-div'>
                    <p><Link>{item}</Link> *</p>
                </div>
              })   
            }
           </div>

           <div className='star'>
            <span style={{marginTop:"16px"}}>Nebulae:</span>
            {
              Nebulae.map((item)=>{
                return <div className='star-sub-div'>
                    <p><Link>{item}</Link> *</p>
                </div>
              })   
            }
           </div>

           <div className='star'>
            <span style={{marginTop:"16px"}}>Miscellaneous:</span>
            {
              Miscellaneous.map((item)=>{
                return <div className='star-sub-div'>
                    <p><Link>{item}</Link> *</p>
                </div>
              })   
            }
           </div>

        </div>
      </div>
      <hr/>
      <div className='index-star-section'>
        <div className='index-star-section-left'>
        <div className='star1'>
            <span style={{marginTop:"16px"}}>Sun:</span>
           {
              Sun.map((item)=>{
                return <div className='star-sub-div'>
                    <p><Link>{item}</Link> *</p>
                </div>
              })  
            }
           </div>

           <div className='star1'>
            <span style={{marginTop:"16px"}}>Comets----</span>
           {
              Comets.map((item)=>{
                return <div className='star-sub-div'>
                    <p><Link>{item}</Link> *</p>
                </div>
              })  
            }
           </div>

           <div className='star1'>
            <Link><p >Asteroids</p></Link>
           </div>
        </div>
        
        <div className='index-star-section-right'>
          <div>
            <h2 >Solar System</h2>
          </div>
          <div>
            <img src="https://apod.nasa.gov/apod/calendar/S_971029.jpg" alt=""/>
          </div>
          <div>
            <img src="https://apod.nasa.gov/apod/calendar/S_960501.jpg" alt=""/>
          </div>
        </div>
      </div>
      <hr/>

      <div className='index-star-section-2'>
        <div className='index-star-section-2-left'>
          <div>
            <img src="https://apod.nasa.gov/apod/calendar/S_960210.jpg" alt=""/>
          </div>
          <div>
            <h2 style={{marginTop:"15px"}}>Space Technology</h2>
          </div>
        </div>
        <div className='index-star-section-2-right'>
        <div className='star1'>
           {
              Space.map((item)=>{
                return <div className='star-sub-div'>
                    <p><Link>{item}</Link> *</p>
                </div>
              })  
            }
           </div>
        </div>
      </div>
     <hr/>

     <div className='index-star-section-3'>
         <div className='index-star-section-3-left'>
         <div className='star1'>
            {/* <span style={{marginTop:"16px"}}>Sun:</span> */}
           {
              Space1.map((item)=>{
                return <div className='star-sub-div'>
                    <p><Link>{item}</Link> *</p>
                </div>
              })  
            }
           </div>
         </div>
         <div className='index-star-section-3-right'>
          <div>
            <h2>Space Technology</h2>
          </div>
          <div>
            <img src="https://apod.nasa.gov/apod/calendar/S_971011.jpg" alt=""/>
          </div>
         </div>
     </div>
     <hr/>

     <div className='index-star-section-4'>
        <div className='index-star-section-4-left'>
          <div>
            <img src="https://apod.nasa.gov/apod/calendar/S_970809.jpg" alt=""/>
          </div>
          <div>
            <h2>Sky</h2>
          </div>
        </div>

        <div className='index-star-section-4-right'>
        <div className='star1'>
            {/* <span style={{marginTop:"16px"}}>Sun:</span> */}
           {
              Sky.map((item)=>{
                return <div className='star-sub-div'>
                    <p><Link>{item}</Link> *</p>
                </div>
              })  
            }
           </div>
        </div>
     </div>
     <hr/>
     <div>
      <Apod_Foter/>
     </div>
    </div>
  )
}

export default Index
