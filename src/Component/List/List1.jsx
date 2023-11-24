import React from 'react'
import section21 from './images/section21.png'
import section22 from './images/section22.png'
import section23 from './images/section23.png'
import section24 from './images/section24.png'
import section25 from './images/section25.png'
import Rank01 from './images/Rank01.png'
import Rank02 from './images/Rank02.png'
import Rank03 from './images/Rank03.png'
import Rank04 from './images/Rank04.png'
import Rank05 from './images/Rank05.png'
import ArrowRight from './images/ArrowRight.png'
import './list1.css'
export default function List1() {
  return (
    <div className="list1" style={{position:'relative'}}>
        <span className="listTitle1" style={{fontSize:20,marginLeft:62,marginTop:10}}> Top 10 in your country </span><img style={{height:13}}src={ArrowRight}/>
        <div className="continer1" style={{flexWrap:'nowrap',marginTop:10}}>
            <img style={{position:'absolute',marginTop:0,left:5}} src={Rank01}/><img style={{position:'relative',marginBottom:4,left:149,height:195}} src={section21} alt="" />
            <img style={{position:'absolute',left:300}}src={Rank02}/><img style={{position:'relative',marginBottom:4,left:270,height:195}} src={section22} alt="" />
            <img style={{position:'absolute',left:550}}src={Rank03}/><img style={{position:'relative',marginTop:0,left:425,height:195}} src={section23} alt="" />
            <img style={{position:'absolute',left:850}}src={Rank04}/><img style={{position:'relative',marginTop:10,left:580,height:195}}src={section24} alt="" />
            <img style={{position:'absolute',left:1150}}src={Rank05}/><img style={{position:'relative',marginTop:0,left:738,height:203}} src={section25} alt="" />
          <div></div>
        </div>
        </div>
  )
}
