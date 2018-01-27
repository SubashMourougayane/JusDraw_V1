import React, { Component } from 'react';
import './App.css';
import {Button, Icon,Row,Input,Footer} from 'react-materialize'
class App extends Component {
 //  constructor(props){
 //    super(props){
 //      this.state:{
 //        Uname:"",
 //        Email:"",
 //        Pass:""
 //        this.handleChange = this.handleChange.bind(this);
 //        this.handleSubmit = this.handleSubmit.bind(this);
 //      }
 //    }
 //  }
 //  handleChange(event) {
 //   this.setState({Uname: event.target.value});
 // }
 // handleSubmit(event) {
 //    alert('A name was submitted: ' + this.state.value);
 //    event.preventDefault();
 //  }

  signUp =()=> {

      var uname = document.getElementById('Username').value;
      var email = document.getElementById('Emailid').value;
      var pass = document.getElementById('Password').value;

      alert(uname+email+pass)

  }
  signIn=() => {

  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="http://www.myiconfinder.com/uploads/iconsets/a4907a7eba6cd4ac85f0762f94fa48e4.png" className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to JusDraw</h1>
          <p className="App-intro">
            Draw() Develop() Deploy()
          </p>
        </header>
        <div className = "MainDiv">

            <div className = "SignUpDiv">
                <Row>
                    <b>SIGNUP</b>
                </Row>
                <Row>
                    <Input  id= "Username" s={12} label="User Name" validate><Icon>contacts</Icon></Input>
                </Row>
                <Row>
                    <Input  id="Emailid" s={12} label="Email" validate type='email'><Icon>email</Icon></Input>
                </Row>
                <Row>
                    <Input  id="Password" s={12} label="Password" validate type = 'password'><Icon>lock</Icon></Input>
                </Row>
                <Row>
                    <Button waves='light' onClick = {this.signUp}>button</Button>
                </Row>
            </div>

            <div className = "SignInDiv">
                <Row>
                    <b>SIGNIN</b>
                </Row>

                <Row>
                    <Input  id="emailid" s={12} label="Email" validate type='email'><Icon>email</Icon></Input>
                </Row>
                <Row>
                    <Input  id="password" s={12} label="Password" validate type = 'password'><Icon>lock</Icon></Input>
                </Row>
                <br/><br/><br/><br/>
                <Row>
                    <Button waves='light' onClick = {this.signIn}>button</Button>
                </Row>
            </div>






        </div>





        <Footer copyrights="&copy 2015 Copyright Text"

	links={
		<ul>
			<li><a className="grey-text text-lighten-3" href="#!">dayanidi.d@juspay.in</a></li>

		</ul>
	}
	className='example'
>
		<h5 className="white-text">Contact Us</h5>
		<p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
</Footer>;


      </div>
    );
  }
}

export default App;
