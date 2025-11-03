import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Box } from "@mui/material"

import { Navbar, Feed, VideoDetail, ChannelDetail, SearchFeed } from './cpmponnets'

function App() {

  return (
    <BrowserRouter>
      <box sx={{ background: '#000'}}>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Feed />} />
          <Route path="/video/:id" element={<VideoDetail />} />
          <Route path="/channel/:id" element={<ChannelDetail />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
        </Routes>
      </box>
    </BrowserRouter>
  )
}

export default App
