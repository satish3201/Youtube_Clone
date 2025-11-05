import { useState, useEffect } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { BorderRight } from '@mui/icons-material'
import SlideBar from '../componnets/SlideBar';
import Videos from '../componnets/Videos.jsx'
import { fetchFromAPI } from '../utils/FetchFromAPI'

const Feed = () => {

  const [selectedCategory, setSelectedCategory] = useState('New');
  const [videos, setVideos] = useState([]);

  useEffect(() => {
  fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
    .then((data) => {
      console.log('🔹 Full API data:', data);
      if (data?.contents) {
        console.log('✅ Using data.contents', data.contents);
        setVideos(data.contents);
      } else if (data?.items) {
        console.log('✅ Using data.items', data.items);
        setVideos(data.items);
        console.log("Videos:", videos);
      } else {
        console.log('⚠️ No contents/items found in response');
        setVideos([]);
      }
    });
}, [selectedCategory]);

  


  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box sx={{ height: { sx: 'auto', md: '92vh' }, borderRight: '1px solid #3d3d3d', px: { sx: 0, md: 2 } }}>
        <SlideBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        <Typography className='copyright' variant='body2' sx={{ mt: 1.5, color: '#fff' }}>
          Copyright 2025 JSM Media
        </Typography>
      </Box>
      <Box p={2} sx={{ overflow: 'auto', height: '90vh', flex: 2 }}>
        <Typography variant='h4' fontWeight='bold' mb={2} sx={{ color: 'white' }}>
          {selectedCategory} <span style={{ color: '#f31503' }}>Videos</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  )
}

export default Feed
