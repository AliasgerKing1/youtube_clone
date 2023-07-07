import React from 'react'
import TunedInOutlined from '@mui/icons-material/TuneOutlined'
import "../../assets/ResultedVideo.css"
import ChannelRow from './ChannelRow'
import VideoRow from './VideoRow'
const ResultedVideo = () => {
    return (
        <>
            <div className='resulted__video'>
                <div className='resulted__video__filter'>
                    <TunedInOutlined />
                    <h2>Filter</h2>
                </div>
                <hr />
                <ChannelRow
                    image="https://d31ezp3r8jwmks.cloudfront.net/rrggk40pbkppfi0tas3j73qr4lub"
                    channel="Clever Programmer"
                    verified
                    subscriber="659K"
                    noOfVideos={382}
                    description="Join 103,000 People Who Are Learning JavaScript. Free. The Ultimate JavaScript Course for Beginners"
                />
                <hr />
                <VideoRow image="https://w0.peakpx.com/wallpaper/102/75/HD-wallpaper-bgmi-thumbnail-ideas-gaming-thumbnail-design-map-pubg.jpg" title="BGMI THUMBNAIL ideas. gaming, thumbnail design, map pubg, HD wallpaper | Peakpx" timeStamp="12 days" channel="Pilot Gaming" views="200K" subscriber="80K" description="Gaming Thumbnail. 143 inspirational designs, illustrations, and graphic elements from the world's best designers. Want more inspiration?" />
                <VideoRow image="https://i.ytimg.com/vi/tsx95odmMCw/maxresdefault.jpg" title="BGMI THUMBNAIL ideas. gaming, thumbnail design, map pubg, HD wallpaper | Peakpx" timeStamp="12 days" channel="Pilot Gaming" views="200K" subscriber="80K" description="Gaming Thumbnail. 143 inspirational designs, illustrations, and graphic elements from the world's best designers. Want more inspiration?" />
                <VideoRow image="https://template.canva.com/EAEIZcSmPFI/1/0/1600w-ap4UDond284.jpg" title="BGMI THUMBNAIL ideas. gaming, thumbnail design, map pubg, HD wallpaper | Peakpx" timeStamp="12 days" channel="Pilot Gaming" views="200K" subscriber="80K" description="Gaming Thumbnail. 143 inspirational designs, illustrations, and graphic elements from the world's best designers. Want more inspiration?" />
                <VideoRow image="https://i.ytimg.com/vi/Y40f7iE5260/maxresdefault.jpg" title="BGMI THUMBNAIL ideas. gaming, thumbnail design, map pubg, HD wallpaper | Peakpx" timeStamp="12 days" channel="Pilot Gaming" views="200K" subscriber="80K" description="Gaming Thumbnail. 143 inspirational designs, illustrations, and graphic elements from the world's best designers. Want more inspiration?" />
                <VideoRow image="https://img.freepik.com/premium-psd/modern-video-game-review-youtube-channel-thumbnail-web-banner-template-premium-psd_449870-724.jpg" title="BGMI THUMBNAIL ideas. gaming, thumbnail design, map pubg, HD wallpaper | Peakpx" timeStamp="12 days" channel="Pilot Gaming" views="200K" subscriber="80K" description="Gaming Thumbnail. 143 inspirational designs, illustrations, and graphic elements from the world's best designers. Want more inspiration?" />
                <VideoRow image="https://indiater.com/wp-content/uploads/2021/06/free-15-best-gaming-youtube-thumbnail-for-pubg-gta-other-psd-pack-2021-templates.jpg" title="BGMI THUMBNAIL ideas. gaming, thumbnail design, map pubg, HD wallpaper | Peakpx" timeStamp="12 days" channel="Pilot Gaming" views="200K" subscriber="80K" description="Gaming Thumbnail. 143 inspirational designs, illustrations, and graphic elements from the world's best designers. Want more inspiration?" />
            </div>
        </>
    )
}

export default ResultedVideo
