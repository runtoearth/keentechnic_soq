import React from 'react';
import { Feature } from '../../components';
import './features.css';

const featureData = [
  {
    title: 'Web Design',
    text: 'KeenTechnics Tailored Web Design Expertise Discover the power of a well-executed web design project with KeenTechnics. Our phased approach guarantees a comprehensive consideration of all vital aspects, delivering a high-performance website. Our highly skilled team, each a specialist in their field, ensures a seamless and captivating online experience for your audience'
  },
  {
    title: 'SEO Optimization',
    text: 'Keentechnics All-Inclusive Digital Marketing Keentechnic goes beyond the norm, providing a rare in-house advantage in digital marketing and SEO services. By combining website optimizations with SEO strategies, we create a seamless and productive collaboration. Embrace efficiency and unlock your websites full potential with Keentechnic as your dedicated digital partner. '
  },
  {
    title: 'Website Hosting',
    text: 'Keentechnic offers a powerful and reliable website hosting solution that combines cutting-edge technology, top-tier security, and unparalleled support. With our hosting services, your web design business can thrive in the digital landscape, delivering a seamless and engaging user experience to your audience while enjoying the peace of mind that comes with a dependable hosting partner. Experience the Keentechnic advantage and take your web design business to new heights with our exceptional website hosting services. '
  },
]

const Features = () => {
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">Our design and development processes prioritize intuitive navigation, clear content presentation, and swift load times.</h1>
        <p>Start A Project Now!</p>
      </div>
      <div className="gpt__features-containers">
        {featureData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title + index}/>
        ))}
      </div>
    </div>
  )
}

export default Features
