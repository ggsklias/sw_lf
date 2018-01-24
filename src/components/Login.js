import React, { Component } from 'react';
import {Form, FormGroup, FormControl, Col, ControlLabel, Button, Checkbox} from 'react-bootstrap';
import {Redirect} from 'react-router-dom';
import '../css/login.css';

class Login extends Component {
    constructor(props){
      super(props);
      this.state = {
        username: '',
        password: '',
        pageState: false
      }
    }

    handleSubmit(event) {
      if (this.state.username){
        this.setState ({
          pageState: true
        });
      }
    }

    render () {
      if (this.state.pageState){
        return <Redirect to='/deliverylist' />
      }
      return (
        <div className="form">
          <Form horizontal>
            <FormGroup className="horizontal" controlId="formHorizontalEmail">
              <Col sm={20}>
                <FormControl
                  type="username"
                  placeholder="Username"
                  onChange={event => this.setState({username: event.target.value})}
                  //username={this.state.username}
                />
              </Col>
            </FormGroup>

            <FormGroup className="horizontal" controlId="formHorizontalPassword">
              <Col sm={20}>
                <FormControl
                  type="password"
                  placeholder="Password"
                  onChange={event => this.setState({password: event.target.value})}
                />
              </Col>
            </FormGroup>

            <FormGroup>
              <Col smOffset={2} sm={20}>
                <Button bsStyle="primary" type="button" onClick={() => this.handleSubmit()}>Submit</Button>
              </Col>
            </FormGroup>
            </Form>
          </div>
		    );
    }
}

export default Login;
