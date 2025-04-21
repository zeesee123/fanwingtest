import React from 'react'
import {

    Routes,
    Route,
    Link,
    Navigate,
    BrowserRouter,
} from "react-router-dom";
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './screen/home/Home';
import Support from './screen/Support/Support';
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