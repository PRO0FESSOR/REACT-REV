import React from 'react'
import './Video.css'

const Video = ({id,title,channel,views,time,verified=false}) => {
    // let verify = {verified};
  return (
    <>
    <div className="container">
        <div className="pic">
            <img src={`https://picsum.photos/200/300?image=${id}`} alt="Waiting ..."/>
        </div>
        <div className="title">{title}</div>
        <div className="channel">{channel} {verified && '✅'}</div>
        <div className="views">
            {views} views <span>.</span> {time}
        </div>
    </div>
    </>
    
  )
}

export default Video