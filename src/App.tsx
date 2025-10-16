import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import MainPage from './pages/MainPage';
import WorksPage from './pages/WorksPage';
import ArticlesPage from './pages/ArticlesPage';
import AffiliationsPage from './pages/AffiliationsPage';
import CansatIntro from './blogs/cansat-intro';
import "./globals.css";

function App() {
  return (
    <BrowserRouter>
    <Header />
        <div className='app-container'>
            <main className='main-content'>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/works" element={<WorksPage />} />
                    <Route path="/articles" element={<ArticlesPage />} />
                    <Route path="/affiliations" element={<AffiliationsPage />} />
                    <Route path="/blogs/cansat-intro" element={<CansatIntro />} />
                </Routes>
            </main>
        </div>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
