import React from 'react'

import { Footer, Features, WhatGPT3, Header, Form } from './containers';
import { Navbar } from './components';
import './App.css';

const App = () => {
    return (
        <div className="App">
            <div className="graient__bg">
                <Navbar />
                <Header />
            </div>
            <WhatGPT3 />
            <Features />
            <Form />
            <Footer />
        </div>
    )
}

export default App