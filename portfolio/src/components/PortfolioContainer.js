import React, { useState } from "react";
import Header from "./Header";
import About from "./pages/AboutMe";
import Projects from "./pages/Projects";
import ContactForm from "./pages/Contact";
import Resume from "./pages/Resume";
import Footer from "./pages/Footer";

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('About');
    const renderPage = () => {
        if (currentPage === 'About') {
            return <About />;
        }
        if (currentPage === 'Projects') {
            return <Projects />;
        }
        if (currentPage === 'Contact') {
            return <ContactForm />;
        }
        return <Resume />;
    }
    
    const handlePageChange = (page) => setCurrentPage(page);
    
    return (
        <div>
            <Header currentpage={currentPage} handlePageChange={handlePageChange}/>
        {renderPage()}
        <Footer />
        </div>
    )
}