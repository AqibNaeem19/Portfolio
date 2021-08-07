import React, { Component } from 'react';
import bg12 from "../images/bg12.png";
import '../styles/About.css';

class About extends Component {
	render() {
		return (
			<div className="About-container" id="About">
				<div className="About-imageContainer">
					<img className="About-image"src={bg12} alt='main-page-background'/>
				</div>
     
				<div className="About-text">
					<h1><i class="fas fa-angle-left"></i> About <i class="fas fa-angle-right"></i></h1>
					<p>Currently doing bachelors in Computer Science, with my passion to create re-usable and
					 clean code through agile methodology for the new era of web development.
					</p>
				</div>
			</div>
		)
	}
}

export default About;
