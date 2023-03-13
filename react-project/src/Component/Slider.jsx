import React, { useEffect, useRef } from 'react'
import { useState } from 'react';
import style from "../Styles/Slider.module.css";
import axios from 'axios';


const Slider = () => {
    const [index, setIndex] = useState(0);
    const [Data, setData] = useState([])
    const [Data1,setData1] = useState([])
    const tRef = useRef(0);
    const api = 'https://dummyjson.com/products'
    // const api = 'https://api.themoviedb.org/3/movie/popular?api_key=a8fd72cec737865b11d1fec97071918a&language=en-US&page=1'
    // const api = 'https://lazy-jade-octopus-tie.cyclic.app/searchingYard/get';

   const imgs=[
        'https://www.bigbasket.com/media/uploads/banner_images/L1_CXNP9371_1200x300_07Mar22.jpg',
        'https://www.bigbasket.com/media/uploads/banner_images/L2-YXPL464-1200x300-25thmar.jpg',
        'https://www.bigbasket.com/media/uploads/banner_images/L2-YXPL370-1200x300-25thmar.jpg',
        'https://www.bigbasket.com/media/uploads/banner_images/L2-YXPL381-1200x300-25thmar.jpg',
        'https://www.bigbasket.com/media/uploads/banner_images/l1p_cmc_m_tataneu_300_100422.jpg',
        'https://www.bigbasket.com/media/uploads/banner_images/L1_CXNP9374_1200x300_07Mar22.jpg',
        'https://www.bigbasket.com/media/uploads/banner_images/L1_CXNP9373_1200x300_07Mar22.jpg',
        'https://www.bigbasket.com/media/uploads/banner_images/L1_CXNP9372_1200x300_07Mar22.jpg',
    ]
     
    useEffect(()=>{
       for(var i=0;i<6;i++){
        setData1(i)
        
       }
      console.log("Data1",Data1)
    })

    

    useEffect(()=>{
      axios.get(api).then((res)=>{return setData(res.data.products),console.log(res.data.products)})
      console.log("Data",Data)
      
    },[])
   

 useEffect(() => {
    start();

    return () => {
      stopTimer();
    };
}, [])



const start = () => {
    tRef.current = setInterval(() => {
      setIndex((prev)=> {
        if (prev === Data.length - 1) {
          return prev = 0;
        }
        return prev + 1;
      });
    }, 3000);
  };

  const stopTimer = () => {
    clearInterval(tRef.current);
  };


  return (
    <div className={style.parent}>
<div className={style.slider} >
<img src={imgs[index]} alt="" width="100%" />

</div>
<div>
{/* {
  Data.length>6 && Data?.map((item)=>{
    return(
      <div>
        <p>{item.title}</p>
        <img src={item.images[0]} alt="img"/>
      </div>
    )
  })
} */}

</div>
</div>
    )
}

export default Slider