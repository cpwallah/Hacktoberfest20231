import React from 'react';
import "./ss1.css";
function StandingCards() {
  return (
    <div>
      <h1>OL standing cards</h1>
      <ol>
        <li style={{ '--accent-color': '#0D6EFD' }}>
          <div className="icon"><i className="fa-brands fa-codepen"></i></div>
          <div className="title">Codepen</div>
          <div className="descr">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, impedit?</div>
        </li>
        <li style={{ '--accent-color': '#6710F5' }}>
          <div className="icon"><i className="fa-brands fa-html5"></i></div>
          <div className="title">HTML 5</div>
          <div className="descr">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
        </li>
        <li style={{ '--accent-color': '#6F42C1' }}>
          <div className="icon"><i className="fa-brands fa-css3"></i></div>
          <div className="title">CSS 3</div>
          <div className="descr">Lorem ipsum dolor sit.</div>
        </li>
        <li style={{ '--accent-color': '#D63384' }}>
          <div className="icon"><i className="fa-brands fa-js"></i></div>
          <div className="title">Javascript</div>
          <div className="descr">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor laboriosam odio alias.</div>
        </li>
        <li style={{ '--accent-color': '#DC3545' }}>
          <div className="icon"><i className="fa-brands fa-github"></i></div>
          <div className="title">Github</div>
          <div className="descr">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
        </li>
      </ol>
      <div className="credits">
        <a
          href="https://www.freepik.com/premium-vector/business-infographics-template-with-five-steps_6124808"
          target="_blank"
          rel="noopener noreferrer" // Add rel attribute for security
        >
          inspired by
        </a>
      </div>
    </div>
  );
}

export default StandingCards;
