import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Home from './home/home';
import SibanRouter from './routes/sibanRouter';
import ActivityRouter from './routes/activityRouter';
import ArtistRouter from './routes/artistRouter';
import LocationSibanRouter from './routes/locationSibanRouter';
import Board from './pages/Board/Board';

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
        <Route path="/board" element={<Board />}>
          <Route path=":id" element={<Board />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
