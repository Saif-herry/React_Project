import React, { useEffect, useRef } from 'react'
import { useState } from 'react';
import style from "../Styles/Slider.module.css";


const Slider = () => {
    const [index, setIndex] = useState(0);
    const tRef = useRef(0);

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


 useEffect(() => {
    start();

    return () => {
      stopTimer();
    };
}, [])

const start = () => {
    tRef.current = setInterval(() => {
      setIndex(function (prev) {
        if (prev === imgs.length - 1) {
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
<div className={style.slider}>
<img src={imgs[index]} alt="" width="100%" />
</div>
</div>
    )
}

export default Slider