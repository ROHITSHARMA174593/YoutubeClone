import React from 'react'
import Leftsidebar from '../../Component/Leftsidebar/Leftsidebar'
import "./Home.css"
import Showvideogrid from '../../Component/Showvideogrid/Showvideogrid'
import vid from "../../Component/Video/vid.mp4"
import { useSelector } from 'react-redux'
const Home = () => {
  const vids=useSelector(state=>state.videoreducer)?.data?.filter(q=>q).reverse();
 
  const navlist=[
    "All",
    "Java",
    "C",
    "C++",
    "Movies",
    "TMKOC",
    "Playlists",
    "Gaming",
    "Comedy"
  ];
  return (
    <div className="container_Pages_App">
      <Leftsidebar/>
      <div className="container2_Pages_App">
        <div className="navigation_Home">
          {navlist.map((m)=>{
            return(
              <p key={m} className='btn_nav_home'>{m}</p>
            );
          })}
        </div>
        <Showvideogrid vid={vids}/>
      </div>
    </div>
  )
}

export default Home