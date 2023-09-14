import React, { useState } from 'react';
import './form.css';
import axios from 'axios';
// import { baseURL } from "./utils/constant";

function Form () { 
  const [clientName, setClientName] = useState();
  const [orgName, setOrgName] = useState();
  const [email, setEmail] = useState();
  const [projectType, setProjectType] = useState();
  const handleSaveClient = () => {
    const data = {
      clientName,
      orgName,
      email,
      projectType
    };
    axios
      .post('http://localhost:5000/client', data)
      .then(result => console.log(result))
      .catch(err => console.log(err));
  }

  return (
    <div className="keentechnic__form section__padding" id="form">
      <div className="keentechnic__form-content">
        <h4>Request a Consultation to Get Started</h4>
        <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
        <p>Don't wait any longer to elevate your online presence. Fill out our inquiry form now, and let's start building a website that not only meets but exceeds your expectations. Your digital success is just a few clicks away!</p>
      </div>
      <div className="keentechnic__form-form">
        <form className="form">
          <div className="form-group">
            <label htmlFor="clientName"><h4>Client Name:</h4></label>
            <input className="input ClientName" type="text" value={clientName} placeholder="Client/Contact Name" onChange={(e) => setClientName(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="orgName"><h4>Organization Name:</h4></label>
            <input className="input OrgName" type="text" value={orgName} placeholder="Organization Name" onChange={(e) => setOrgName(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="email"><h4>Email:</h4></label>
            <input className="input Email" type="email" value={email} placeholder="Contact Email" onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="projectType"><h4>Project Type:</h4></label>
            <input className="input ProjectType" type="text" value={projectType} placeholder="E-commerce, landing page, etc." onChange={(e) => setProjectType(e.target.value)} />
          </div>
          <button type="submit" onClick={handleSaveClient}>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Form;