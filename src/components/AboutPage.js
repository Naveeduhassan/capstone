import React from 'react';
import aboutImg1 from './images/about1.jpg'; // Replace with your actual image file
import aboutImg2 from './images/about2.jpg'; // Replace with your actual image file

export default function AboutPage() {
  return (
    <section className="about">
      <div className="about-Content">
        <div className="about-header">
          <h2 className="about-title">Little Lemon</h2>
          <p>Chicago</p>
        </div>
        <div className="about-text">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
          Velit officia consequat duis enim velit mollit. 
          Exercitation veniam consequat sunt nostrud amet.<br /><br />
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
          Velit officia consequat duis enim velit mollit.
        </div>
      </div>
      <div className="about-image">
        <img src={aboutImg1} alt="About 1" className="about-image-1" />
        <img src={aboutImg2} alt="About 2" className="about-image-2" />
      </div>
    </section>
  );
}