import React from 'react';
import Landing from '../../components/Landing';
import About from '../../components/About';
import Portfolio from '../../components/Portfolio';
import ScrollTop from '../../components/ScrollTop';
import ThemeSwitcher from '../../components/ThemeSwitcher';
import Footer from '../../components/Footer';
import ContactForm from '../../components/ContactForm';
import Nav from '../../components/Nav';


function HomePage() {

    return (
        <div>
            <ThemeSwitcher>
                <Nav/>
                <Landing />
                <About />
                <Portfolio />
                <ContactForm />
                <ScrollTop />
                <Footer />
            </ThemeSwitcher>
        </div>
    );
}

export default HomePage;
