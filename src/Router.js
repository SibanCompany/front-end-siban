import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Footer from './components/footer';
import Home from './home/home';
import SibanRouter from './routes/sibanRouter';
import ActivityRouter from './routes/activityRouter';
import ArtistRouter from './routes/artistRouter';
import LocationSibanRouter from './routes/locationSibanRouter';
import Board from './pages/Board/Board';
import Nav from './components/Nav/Nav';
import BoardDetail from './pages/Board/CommunityBoard/BoardDetail/BoardDetail';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/siban" element={<SibanRouter />} />
        <Route path="/activity" element={<ActivityRouter />} />
        <Route path="/artists" element={<ArtistRouter />} />
        <Route path="/location" element={<LocationSibanRouter />} />
        <Route path="/board" element={<Board />} />
        <Route path="/board/:id" element={<BoardDetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
