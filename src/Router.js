import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Home from './home/home';
import SibanRouter from './routes/sibanRouter';
import ActivityRouter from './routes/activityRouter';
import ArtistRouter from './routes/artistRouter';
import LocationSibanRouter from './routes/locationSibanRouter';
import BoardRouter from './routes/boardRouter';

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/siban" element={<SibanRouter />} />
        <Route path="/activity" element={<ActivityRouter />} />
        <Route path="/artists" element={<ArtistRouter />} />
        <Route path="/location" element={<LocationSibanRouter />} />
        <Route path="/board" element={<BoardRouter />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
