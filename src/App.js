
import { Box } from '@mui/system';
import React from 'react'
import {BrowserRouter, Routes ,Route} from 'react-router-dom';
import ChannelDetail from './Components/ChannelDetail';
import Feed from './Components/Feed';
import Navbar from './Components/Navbar';
import SearchFeed from './Components/SearchFeed';
import VideoDetail from './Components/VideoDetail';

const App = () => (
  <BrowserRouter>
    <Box sx={{ backgroundColor: '#000' }}>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Feed />} />
        <Route path='/video/:id' element={<VideoDetail />} />
        <Route path='/channel/:id' element={<ChannelDetail />} />
        <Route path='/search/:searchTerm' element={<SearchFeed />} />
      </Routes>
    </Box>
  </BrowserRouter>
);

export default App;
