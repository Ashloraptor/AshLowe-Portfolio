import { useState, useEffect } from 'react';
// Bringing in the required component from 'react-router-dom' for linking between pages
import { Link } from 'react-router-dom';
// This is a static page mocking an "About Us" section for our fake user data
export default function About() {
    return (
      <div className="container pt-4">
       
        <img src="https://images.squarespace-cdn.com/content/v1/63dbec3d38523022023d7de5/00f3b588-a366-4d32-88e0-e05aa69238ed/Ashley.jpg?format=500w" width="200px" className="features-icons-item mx-auto profile"></img>
        {/* <img src="src/assets/Profile.png" width="200px" className="features-icons-item mx-auto profile"></img> */}
      
        <p>
        After receiving my high school diploma in 2012, I attended San Antonio College and worked as a cashier in the fast food industry, as I pondered my choice in careers. In 2014, a door opened for me in technical support for AT&T, through a 3rd party contractor. I continued to work there until 2016, when I received a job offer from JPM Chase.
        </p>
        <p>
        I worked for JPM Chase in Fraud Protection and Tech Support for 7 years, until my job was rendered obsolete by AI. It was during my tenure at Chase that I discovered my passion for coding. As my job position no longer existed, I decided to take the opportunity to return to school and learn the additional skills I needed to be able to turn that passion into a career.</p>
        <p>
        Having completed my coding education (passing with 98.6%), I am now a full-stack certified, web developer, with over 7 years of experience in the tech support sector. Now, I’m looking for the right company with which to apply my skills, and grow together in the tech industry.
        </p>
      </div>
    );
  }
  