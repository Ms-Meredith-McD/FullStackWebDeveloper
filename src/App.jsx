import { useState } from 'react';
import NavTabs from './components/NavTabs'
import Resume from './components/pages/Resume';
import About from './components/pages/About';
import Portfolio from './components/pages/Portfolio';
import Contact from './components/pages/Contact';
import Footer from './components/pages/Footer';
import '@fortawesome/fontawesome-free/css/all.css';

function App() {
    const [currentPage, setCurrentPage] = useState('About');

    // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
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

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            {/* We are passing the currentPage from state and the function to update it */}
            <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
            {/* Here we are calling the renderPage method which will return a component  */}
            <main className="wallpaper">{renderPage()}</main>
            <Footer /> 
        </div>

    );
}

export default App;