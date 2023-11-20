import React from 'react'
import section31 from 'C:/Users/Dell/OneDrive/Desktop/react js/task/src/assets/section31.png'
import section32 from 'C:/Users/Dell/OneDrive/Desktop/react js/task/src/assets/section32.png'
import section33 from 'C:/Users/Dell/OneDrive/Desktop/react js/task/src/assets/section33.png'
import section34 from 'C:/Users/Dell/OneDrive/Desktop/react js/task/src/assets/section34.png'
import section35 from 'C:/Users/Dell/OneDrive/Desktop/react js/task/src/assets/section35.png'
import ArrowRight from 'C:/Users/Dell/OneDrive/Desktop/react js/task/src/assets/ArrowRight.png'
import './list2.css'
export default function List() {
  return (
    <div className="list2" style={{position:'relative'}}>
        <span className="listTitle" style={{fontSize:20,marginTop:10}}>Trending now </span><img style={{height:13}}src={ArrowRight}/>
        <div className="continer" style={{position:'relative',display:'flex',marginTop:10,gap:25}}>
            <div><img src={section31} alt="" /></div>
            <div><img src={section32} alt="" /></div>
            <div><img src={section33} alt="" /></div>
            <div><img src={section34} alt="" /></div>
            <div><img src={section35} alt="" /></div>

        </div>
        </div>
  )
}