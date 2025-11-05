import { Stack, Box } from "@mui/material"
import{ VideoCart, ChannelCard} from "./"


const Videos = ({videos}) => {
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
      {videos.map((item,idx)=>(
        <Box key={idx}>
          {item.id.videoId && <VideoCart video={item} />}
          {item.id.channelId && <ChannelCard channelIdDetail={item} />}
        </Box>
      ))}
    </Stack>
  )
}

export default Videos
