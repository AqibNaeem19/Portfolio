import React, { Component } from "react";

import "../styles/Stack.css";

// Array of Stacks to render
const stack = [
  { stack_class: 'fab fa-html5', stack_text: 'HTML 5'},
  { stack_class: 'fab fa-css3-alt', stack_text: 'CSS 3'},
  { stack_class: 'fab fa-bootstrap', stack_text: 'Bootstrap 5'},
  { stack_class: 'fab fa-js-square', stack_text: 'JavaScript'},
  { stack_class: 'fab fa-react', stack_text: 'React JS'},
];

// Looping through every single Stack and returning evuivalent JSX.
const printStack = stack.map((item) => {
  return (
    <div>
      <i class={item.stack_class}></i>
      <p className='Stack-name'>{item.stack_text}</p>
    </div>
  )
})

class Stack extends Component {
  render() {
    return (
      <div id='Projects' className="Stack-container">
        <h1><i class="fas fa-angle-left"></i> My stack <i class="fas fa-angle-right"></i></h1>
        <div className="Stack-logos">
          {printStack}
        </div>
      </div>
    );
  }
}

export default Stack;
