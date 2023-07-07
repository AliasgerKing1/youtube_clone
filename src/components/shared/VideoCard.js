import { Avatar } from '@mui/material'
import React from 'react'
import "../../assets/VideoCard.css"
const VideoCard = ({ image, title, timeStamp, channel, views, channelImage }) => {
    return (
        <>
            <div className='videoCard'>
                <img className='videoCard_thmubnail' src={image} alt={title} />
                <div className='videoCard__info'>
                    <Avatar className='videoCard__avatar' alt={channel} src={channelImage} />
                    <div className='videoCard__text'>
                        <h4>{title}</h4>
                        <p className='videoCard__text__first__p'>{channel}</p>
                        <p>{`${views} views`} . {`${timeStamp} ago`}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default VideoCard
