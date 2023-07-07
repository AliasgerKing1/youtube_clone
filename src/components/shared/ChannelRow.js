import React from 'react'
import "../../assets/ChannelRow.css"
import { Avatar } from '@mui/material'
import VerifiedIcon from '@mui/icons-material/CheckCircleOutlineOutlined'
const ChannelRow = ({ image, channel, subscriber, noOfVideos, description, verified }) => {
    return (
        <>
            <div className='channel__row'>
                <Avatar className='channel__row__logo' src={image} alt={channel} />
                <div className='channel__row__text'>
                    <h4>{channel} &nbsp; {verified && <VerifiedIcon />}</h4>
                    <p className='channel__row__text__subs'>{subscriber} subscribers . {noOfVideos} videos</p>
                    <p>{description}</p>
                </div>
            </div>
        </>
    )
}

export default ChannelRow
