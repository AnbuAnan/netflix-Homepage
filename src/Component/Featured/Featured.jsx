import './featured.css'
import { IoIosInformationCircleOutline } from "react-icons/io";
import { FaPlay, } from 'react-icons/fa'
import Title from './Title.png'
import Netflix_Symbol_RGB from './Netflix_Symbol_RGB.png'


export default function Featured() {
  return (
    <div className="featured"style={{}}>
        <img className="title" src={Title}/>

        <div className="name" style={{position:'absolute',bottom:50,textAlign:'left',marginLeft:60}}>
             <img style={{height:30,marginLeft:10,marginTop:-2,position:'absolute'}}  src={Netflix_Symbol_RGB}  /> 
            <span style={{fontSize:17,position:'absolute',marginLeft:35}}> S H O W</span>
            <h1>MAID</h1> 
            <div className="button" >
            <button className="bt1"><FaPlay/>  <span>Play</span></button><span style={{marginRight:25}}/>
            <button className="bt2"><IoIosInformationCircleOutline/>  <span>More info</span></button>
            
            </div>
        </div>
    </div>
  )
}