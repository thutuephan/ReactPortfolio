import React, { useState } from 'react'
import About from './pages'
import Works from './pages'
import Contact from './pages'
// import Footer from './Footer'
// import Header from './Header'
import Navigation from './Navigation'

function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('About')

    const renderPage = () => {
        if(currentPage === 'About') {
            return <About />
        }
        if(currentPage === 'Works') {
            return <Works />
        }
        if(currentPage === 'Contact') {
            return <Contact />
        }
        
    };
    
    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <Navigation currentPage={currentPage} handlePageChange={handlePageChange}/>
            {renderPage()}
            
        </div>
    )
}

export default PortfolioContainer

