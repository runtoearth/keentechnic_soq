import React from 'react'

import { Footer, Possibility, Features, WhatGPT3, Header } from './containers';
import { Brand, Navbar } from './components';
import './App.css';

const App = () => {
    return (
        <div className="App">
            <div className="graient__bg">
                <Navbar />
                <Header />
            </div>
            <Brand />
            <WhatGPT3 />
            <Features />
            <Possibility />
            <Footer />
        </div>
            )
}

            export default App