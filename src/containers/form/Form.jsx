import React from 'react';
import { useForm } from 'react-hook-form';

// import formImage from '../../assets/form.png'
import './form.css';


function Form () {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div class="keentechnic__form section__padding" id="form">
      <div className="keentechnic__form-content">
        <h4>Request a Consultation to Get Started</h4>
        <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
        <p>Don't wait any longer to elevate your online presence. Fill out our inquiry form now, and let's start building a website that not only meets but exceeds your expectations. Your digital success is just a few clicks away!</p>
      </div>
      <div class="keentechnic__form-form">
        <form class="form" onSubmit={handleSubmit(onSubmit)}>
          <label><h4>Client Name:</h4></label>
          <input class="input" type="text" {...register("clientName", {required: true })} />
          {errors.clientName && <p>Client Name is required.</p>}
          <label><h4>Organization Name:</h4></label>
          <input class="input" type="text" {...register("orgName", {required: true })} />
          {errors.orgName && <p>Organization Name is required.</p>}
          <label><h4>Email:</h4></label>
          <input class="input" type="email" {...register("email", {required: true, pattern: /^\S+@\S+$/i })} />
          {errors.email && <p>Email is required.</p>}
          <label>
            <h4>Project Type:</h4>
            <select class="input" {...register("project")}>
              <option value="ecommerce">E-Commerce</option>
              <option value="portfolio">Portfolio</option>
              <option value="landing">Landing/Service Page</option>
              <option value="other">Other</option>
            </select>
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Form;

// const Form = () => {
//   return (
//     <div className="keentechnic__form section__padding" id="possibility">
//       <div className="keentechnic__form-image">
//         <img src={formImage} alt="form" />
//       </div>
//       <div className="keentechnic__form-content">
//         <h4>Request a Consultation to Get Started</h4>
//         <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
//         <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
//         <h4>Request Early Access to Get Started</h4>
//         {/* Creating Form Here */}
        
//       </div>
//     </div>
//   )
// }