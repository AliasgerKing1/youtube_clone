import React from 'react'
import "../../assets/VideoRow.css"
const VideoRow = ({ image, title, timeStamp, channel, views, subscriber, description }) => {
    return (
        <>
            <div className='video__row'>
                <img src={image} alt={channel} />
                <div className='video__row__text'>
                    <h3>{title}</h3>
                    <p className='video__row__text__headline'>
                        <p>{channel} .<span className='video__row__text__subs__number'> {subscriber}</span>  subscribers  {views} views . {timeStamp} ago</p>
                    </p>
                    <p className='video__row__text__description'>{description}</p>
                </div>
            </div>
        </>
    )
}

export default VideoRow
