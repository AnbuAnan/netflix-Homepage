 
import Featured from "../Component/Featured/Featured"
import Footer from "../Component/Footer/Footer"
import List from "../Component/List/List"
import List1 from "../Component/List/List1"
import List2 from "../Component/List/List2"
import List3 from "../Component/List/List3"
import Navbar from "../Component/Navbar/Navbar"
import"./home.css"


const Home = () => {
  return (
    <div className='home'>
      
        <Navbar/>
        <Featured/>
        <List/>
        <List1/>
        <List2/>
        <List3/>
        <Footer/>
    
        </div>

        
  )
}

export default Home
