import React from 'react'
import {

    Routes,
    Route,
    Link,
    Navigate,
    BrowserRouter,
} from "react-router-dom";
import Header from './components/header/Header.jsx';
import Footer from './components/footer/Footer.jsx';
import Home from './screen/home/Home.jsx';
import Support from './screen/Support/Support.jsx';
function RouterList() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/support" element={<Support />} />

                </Routes>
                <Footer />
            </BrowserRouter>


        </>
    )
}

export default RouterList