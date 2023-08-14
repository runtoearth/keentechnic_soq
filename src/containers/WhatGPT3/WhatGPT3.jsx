import React from 'react';
import { Feature } from '../../components';
import './whatgpt3.css';
import finart from '../../assets/finart.png';

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature title="Recent Projects" text="A responsive and beautiful website design is crucial for KeenTechnic as it ensures a positive user experience. With a design that adapts seamlessly to different devices and screen sizes, visitors can access the website from desktops, tablets, and smartphones without any loss of functionality or aesthetic appeal." />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">Modern & Resposive Design</h1>
        <p>Explore The Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature title="Workforce Connect" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. " />
        <Feature title="Algebra Teahouse" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
        <Feature title="Ohio A.C.E." text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
      </div>
    </div>
  )
}

export default WhatGPT3