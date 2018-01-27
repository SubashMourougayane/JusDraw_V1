import React, { Component } from 'react';
import './App.css';
import {Button, Icon,Row,Input} from 'react-materialize'
class App extends Component {
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
            <div className = "SignInDiv">
                <Row>
                    <Input s={6} label="User Name" validate><Icon>contacts</Icon></Input>
                </Row>
                <Row>
                    <Input s={6} label="Email" validate type='email'><Icon>email</Icon></Input>
                </Row>
                <Row>
                    <Input s={6} label="Password" validate type = 'password'><Icon>lock</Icon></Input>
                </Row>
                <Row>
                    <Button waves='light'>button</Button>
                </Row>
            </div>
        </div>

      </div>
    );
  }
}

export default App;
