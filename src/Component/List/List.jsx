import React from 'react'
import section11 from 'C:/Users/Dell/OneDrive/Desktop/react js/task/src/assets/section11.png'
import section12 from 'C:/Users/Dell/OneDrive/Desktop/react js/task/src/assets/section12.png'
import section13 from 'C:/Users/Dell/OneDrive/Desktop/react js/task/src/assets/section13.png'
import section14 from 'C:/Users/Dell/OneDrive/Desktop/react js/task/src/assets/section14.png'
import section15 from 'C:/Users/Dell/OneDrive/Desktop/react js/task/src/assets/section15.png'
import ArrowRight from 'C:/Users/Dell/OneDrive/Desktop/react js/task/src/assets/ArrowRight.png'
import './list.css'

export default function List() {
  return (
    <div className="list" style={{position:'absolute',top:720}}>
        <span className="listTitle" style={{fontSize:20}}>See again </span><img style={{height:13}}src={ArrowRight}/>
        <div className="continer" style={{display:'flex',marginTop: 5,gap:25}}>
            <img src={section11} alt="" />
            <img src={section12} alt="" />
            <img src={section13} alt="" />
            <img src={section14} alt="" />
            <img src={section15} alt="" />

        </div>
        </div>
  )
}
