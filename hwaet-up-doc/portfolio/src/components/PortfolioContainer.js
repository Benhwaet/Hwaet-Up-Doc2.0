import React, { useState } from "react";
import Header from "../components/Header";
import About from "../components/pages/AboutMe";
import Projects from "../components/pages/Projects";
import ContactForm from "../components/pages/Contact";
import Resume from "../components/pages/Resume";
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