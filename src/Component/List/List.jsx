import React from 'react'
import section11 from './images/section11.png'
import section12 from './images/section12.png'
import section13 from './images/section13.png'
import section14 from './images/section14.png'
import section15 from './images/section15.png'
import ArrowRight from './images/ArrowRight.png'
import './list.css'

export default function List() {
  return (
    <div className="list" style={{position:'absolute',top:720}}>
        <span className="listTitle" style={{fontSize:20}}>See again </span><img style={{height:13}}src={ArrowRight}/>
        <div className="continer0" >
            <img src={section11} alt="" />
            <img src={section12} alt="" />
            <img src={section13} alt="" />
            <img src={section14} alt="" />
            <img src={section15} alt="" />

        </div>
        </div>
  )
}
