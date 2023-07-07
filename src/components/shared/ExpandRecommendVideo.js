import React from 'react'
import "../../assets/RecommendedVideo.css"
import VideoCard from './VideoCard'
const RecommendedVideo = () => {
    return (
        <>
            <div className='recommended__videos'>
                <h2>Recommended</h2>
                <div className='recommended__videos__videos'>
                    <VideoCard title="Make a Gaming Logo with The Best Avatar Maker | Placeit" image="https://template.canva.com/EAEIZcSmPFI/1/0/1600w-ap4UDond284.jpg" timeStamp="6 Month" channel="Place Met" views="25k" channelImage="https://placeit-assets1.s3-accelerate.amazonaws.com/custom-pages/avatar-maker/avatar-logo-maker-for-a-twitch-channel-1458e-768x768.png" />
                    <VideoCard title="Placeit - Gaming Channel Avatar Logo Maker" image="https://i.pinimg.com/originals/95/fa/9c/95fa9cb924c0dd8220e1dd6d760cdbe4.jpg" timeStamp="1 Month" channel="Place It" views="1.2K" channelImage="https://d2n9ha3hrkss16.cloudfront.net/uploads/stage/stage_image/25627/optimized_large_thumb_stage.jpg" />
                    <VideoCard title="Motivational Logos - 76+ Best Motivational Logo Ideas. Free Motivational Logo Maker. | 99designs" image="https://i.pinimg.com/originals/de/86/96/de86961eb5cef17d95c183e4b91f4845.jpg" timeStamp="4 Month" channel="99 Design" views="890" channelImage="https://images-platform.99static.com//H0YC5R5Kr2Qqth_fTfnOXqDo9n8=/705x704:1401x1400/fit-in/500x500/99designs-contests-attachments/131/131110/attachment_131110235" />
                    <VideoCard title="225 YouTube Video Ideas You Can Try Right Now | Renderforest" image="https://imgv3.fotor.com/images/blog-richtext-image/Blue-Yellow-Puppy-Training.png" timeStamp="3 month" channel="youtube Ideas" views="2.1M" channelImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTty0Gz-CBFPACP4BrFOS2BzyUjjElwcsw_oA&usqp=CAU" />
                    <VideoCard title="hijabi cook chef spoons food avatar logo" image="https://d3jmn01ri1fzgl.cloudfront.net/photoadking/webp_thumbnail/61485e93c6620_json_image_1632132755.webp" timeStamp="28 day" channel="Master Cheif" views="20K" channelImage="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/hijabi-cook-chef-spoons-food-avatar-logo-design-template-71d5c034dcc7d89fcda2ddf386bb676c_screen.jpg?ts=1619324492" />
                    <VideoCard title="Free customizable YouTube channel logo templates | Canva" image="https://img.freepik.com/free-vector/business-technology-youtube-thumbnail-template_23-2149215203.jpg" timeStamp="1 day" channel="Smart Tech" views="1K" channelImage="https://marketplace.canva.com/EAEvfU5wDKk/3/0/1600w/canva-orange-blue-smart-tech-youtube-channel-logo-xZrLyLwnKKM.jpg" />
                </div>
            </div>
        </>
    )
}

export default RecommendedVideo
