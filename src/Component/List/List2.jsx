import React from 'react'
import section31 from './images/section31.png'
import section32 from './images/section32.png'
import section33 from './images/section33.png'
import section34 from './images/section34.png'
import section35 from './images/section35.png'
import ArrowRight from './images/ArrowRight.png'
import './list2.css'
export default function List() {
  return (
    <div className="list2" style={{position:'relative'}}>
        <span className="listTitle" style={{fontSize:20,marginTop:10}}>Trending now </span><img style={{height:13}}src={ArrowRight}/>
        <div className="continer2" style={{position:'relative',marginTop:10,gap:25}}>
            <img src={section31} alt="" />
            <img src={section32} alt="" />
            <img src={section33} alt="" />
            <img src={section34} alt="" />
            <img src={section35} alt="" />

        </div>
        </div>
  )
}