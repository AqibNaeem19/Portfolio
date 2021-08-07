import React, { Component } from "react";
import firstProjectPic from '../images/project1.png';
import secondProjectPic from '../images/project2.png';
import thirdProjectPic from '../images/project3.png';
import "../styles/Projects.css";


// Array of Projects to render.
const projects = [
  { project_title: 'Color-Picker', 
    project_paragraph: 'Clone of flat-ui-colors, ultimate color palette generator', 
    alt: 'color-picker-clone', 
    image: firstProjectPic, 
    view_live_link: true, 
    code_link: 'https://github.com/AqibNaeem19/flatui-clone', 
    live_link: 'https://aqibnaeem19.github.io/flatui-clone/'
  },
  { project_title: 'Premium-Todo',
    project_paragraph: 'Task checklist keeper app, never forget anything', 
    alt: 'premium-todo-list', 
    image: thirdProjectPic, 
    view_live_link: true, 
    code_link: 'https://github.com/AqibNaeem19/Premium-todo', 
    live_link: 'https://aqibnaeem19.github.io/Premium-todo/'
  },
  { project_title: 'Portfolio', 
    project_paragraph: 'Eye catching design with tons of animations', 
    alt: 'personal-portfolio', 
    image: secondProjectPic, 
    view_live_link: false, 
    code_link: 'https://github.com/AqibNaeem19/Portfolio'
  }
]

// Looping through every single project and returning equivalent JSX.
const printProjects = projects.map((project) => {
  return (
    <div className="single-project-container">
            <div className="projects-description">
              <h2 className="projects-title">{project.project_title}</h2>
              <p className="projects-paragraph">
                {project.project_paragraph}
              </p>
							<div>
              {/* target ={_blank} opens the link in new tab */}
              {/* This new tab could be an XSS attack [ Security Risk ] */}
              {/* Add rel='noopener noreferrer' to protect from XSS */}
								<button className='projects-code-button'>
                  <a href={project.code_link} 
                    target='_blank' 
                    rel='noopener noreferrer'>View Code</a> 
                    <i class="fab fa-github"></i>
                </button>
                {project.view_live_link && 
                  <button className='projects-live-button'>
                    <a href={project.live_link} 
                      target='_blank' 
                      rel='noopener noreferrer'>View Live</a>
                      <i class="fas fa-eye"></i>
                  </button>
                }
							</div>
            </div>
						<img className='projects-image' src={project.image} alt={`${project.alt}`}/>
          </div>
  )
})


export default class Projects extends Component {
  render() {
    return (
      <div id="Projects">
        <div className="projects-container">
          <div className="projects-ball"></div>
          <h1 className="projects-heading">
            <i class="fas fa-angle-left"></i> Projects{" "}
            <i class="fas fa-angle-right"></i>
          </h1>
          {printProjects}
        </div>
      </div>
    );
  }
}
