import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">Dynamic and User-Focused Web Solutions</h1>
        <p>As a client-centric consultancy, KeenTechnic goes beyond creating visually stunning websites. Their team understands the crucial role of user experience and user interface in driving success on the digital landscape. By combining artistic flair with cutting-edge technology, KeenTechnic crafts websites that are not only visually striking but also seamlessly responsive across all devices.</p>

        <div className="gpt3__header-content__input">
          <button type="button">Start A Project</button>
        </div>
      </div>
      <div className="gpt3__header-image">
        <img src={ai} alt="ai" />
      </div>
    </div>
  )
}

export default Header