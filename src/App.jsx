import { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavTabs from './components/NavTabs';
import Resume from './components/pages/Resume';
import About from './components/pages/About';
import Portfolio from './components/pages/Portfolio';
import Contact from './components/pages/Contact';
import Footer from './components/pages/Footer';
import '@fortawesome/fontawesome-free/css/all.css';

function App() {
    const [currentPage, setCurrentPage] = useState('About');

    useEffect(() => {
        const storedPage = localStorage.getItem('currentPage');
        if (storedPage) {
            setCurrentPage(storedPage);
        }
    }, []);

    const renderPage = () => {
        if (currentPage === 'Resume') {
            return <Resume />;
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />;
        }
        if (currentPage === 'About') {
            return <About />;
        }
        return <Contact />;
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
        localStorage.setItem('currentPage', page);
    };

    return (
        <Router>
            <div>
                <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
                <main className="wallpaper">{renderPage()}</main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;