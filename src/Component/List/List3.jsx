import React from 'react'
import section41 from './images/section41.png'
import section42 from './images/section42.png'
import section43 from './images/section43.png'
import section44 from './images/section44.png'
import section45 from './images/section45.png'
import ArrowRight from './images/ArrowRight.png'
import './list3.css'

export default function List() {
  return (
    <div className="list3">
        <span className="listTitle" style={{fontSize:20}}> Sci-fi shows  </span><img style={{height:13}}src={ArrowRight}/>
        <div className="continer3" style={{flexWrap:'nowrap',marginTop:10,gap:25}}>
            <img src={section41} alt="" />
            <img src={section42} alt="" />
            <img src={section43} alt="" />
            <img src={section44} alt="" />
            <img src={section45} alt="" />

        </div>
        </div>
  )
}