import React, { Component } from 'react';
import '../styles/Contact.css';

export default class Contact extends Component {
	constructor(props){
		super(props);
		this.state = {subject: '', message: ''};
		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
		this.onFormReset = this.onFormReset.bind(this);
	}

	onInputChange(event){
		this.setState({[event.target.name] : event.target.value});
	}

	onFormReset(event){
		event.stopPropagation();
		this.setState({subject: '', message: ''});
	}

	onFormSubmit(event){
		event.stopPropagation();
		event.preventDefault();
		try{ 
			window.open(`mailto:maqibnaeem2019@gmail.com?subject=${this.state.subject}&body=${this.state.message}`);
			alert("Email sent successfully !!");
		} 
		catch(error){
			alert("Failed to send email !!");
		}    
		this.setState({subject: '', message: ''});
	}

     

	render() {
		const { subject, message} = this.state;

		return (
			<div id="Contact">
				<div className='footer-container'>
					<h1 className='contact-heading'>
						<i class="fas fa-angle-left"></i> Contact <i class="fas fa-angle-right"></i>
					</h1>

					<div className='Form'>
						<h2 className="Hire-statement">
							Want to hire me<span className="Hire-statement-spans">? </span>
							I'm just an email away<span className="Hire-statement-spans">!</span>
						</h2>

						<form  autoComplete='off' onSubmit={this.onFormSubmit}>                         
							<br/>
							<input class='Email-input' 
								type='text' 
								name='subject' 
								value={subject} 
								onChange={this.onInputChange} 
								placeholder='SUBJECT'
							/>
							<br />
							<textarea  type='text' 
								name='message' 
								value={message} 
								onChange={this.onInputChange} 
								placeholder='MESSAGE'
							/>
							<button className="Form-submit" type="submit" >Send Email</button>
							<button className="Form-clear" type="reset" onClick={this.onFormReset}>Clear</button>
						</form>
					</div>
				</div>
		</div>
		)
	}
}
