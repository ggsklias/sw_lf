import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import {Redirect} from 'react-router-dom';
import '../css/deliverylist.css';


class DeliveryList extends Component {
  constructor(props){
    super(props);

    this.state =
    {
      backVal: false
    }
  }

  handleSubmit(event)
  {
    this.setState ({
      backVal: true
    })
  }

  render() {
    if (this.state.backVal){
      return <Redirect to='/' />
    }
    return (
      <div className="delivery-list">
        <div className="deliveries">
          <div className="row">
            <div className="col-sm-2"></div>
            <Button className="col-sm-10" bsStyle="primary" bsSize="large" block>
              Block level button
            </Button>
          </div>

          <div className="row-sm-4"></div>
          <div className="row">
            <div className="col-sm-2"></div>
            <Button className="col-sm-10" bsStyle="primary" bsSize="large" block>
              Block level button
            </Button>
          </div>

          <Button bsStyle="primary" onClick={() => this.handleSubmit()}>Back</Button>
        </div>
        <div className="guidelines">

        </div>
      </div>
    );
  }
}

export default DeliveryList;
