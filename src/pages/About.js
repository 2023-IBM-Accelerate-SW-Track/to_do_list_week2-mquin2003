import React, { Component } from 'react';
import "./About.css";
import profile_pic from "../assets/20230612_231936.jpg";
  
export default class About extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="split left">
            <div className="centered">
              <img 
                className="profile_image"
                src={profile_pic}
                alt="Profile Pic"
              ></img>
            </div>
          </div>
          <div className="split right">
            <div className="centered">
              <div className="name_title">Manuel Quinones</div>
              <div className="brief_description">
                <h2>I am a student at Queens College. I enjoy experimenting with computers during my free time.</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}