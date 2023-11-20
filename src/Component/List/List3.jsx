import React from 'react'
import section41 from 'C:/Users/Dell/OneDrive/Desktop/react js/task/src/assets/section41.png'
import section42 from 'C:/Users/Dell/OneDrive/Desktop/react js/task/src/assets/section42.png'
import section43 from 'C:/Users/Dell/OneDrive/Desktop/react js/task/src/assets/section43.png'
import section44 from 'C:/Users/Dell/OneDrive/Desktop/react js/task/src/assets/section44.png'
import section45 from 'C:/Users/Dell/OneDrive/Desktop/react js/task/src/assets/section45.png'
import ArrowRight from 'C:/Users/Dell/OneDrive/Desktop/react js/task/src/assets/ArrowRight.png'
import './list3.css'

export default function List() {
  return (
    <div className="list3">
        <span className="listTitle" style={{fontSize:20}}> Sci-fi shows  </span><img style={{height:13}}src={ArrowRight}/>
        <div className="continer" style={{display:'flex',marginTop:10,gap:25}}>
            <div><img src={section41} alt="" /></div>
            <div><img src={section42} alt="" /></div>
            <div><img src={section43} alt="" /></div>
            <div><img src={section44} alt="" /></div>
            <div><img src={section45} alt="" /></div>

        </div>
        </div>
  )
}