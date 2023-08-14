import React from 'react';
import './footer.css';
import logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
      <div className='gpt3__footer-heading'>
        <h1 className='gradient__text'>Step in to the future before others</h1>
      </div>

      <div className='gpt3__footer-btn'>
        <p>Start Your Project Here</p>
      </div>

      <div className='gpt3__footer-links'>
        <div className='gpt3__footer-links_logo'>
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p>Social Media</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Get in touch</h4>
          <p>085-132567</p>
          <p>info@payme.net</p>
        </div>
      </div>

      <div className='gpt3__footer-copyright'>
        <p>© 2021 KeenTechnic. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer