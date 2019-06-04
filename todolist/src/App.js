import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './components/Title';
import Search from './components/Search';
import Sort from './components/Sort';
import Form from './components/Form';
import ListItem from './components/ListItem';
import SweetAlert from 'sweetalert-react';
import 'sweetalert/dist/sweetalert.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // items: Items
      // showAlert: false
    }
  }

  render() {
    return (
      <div className="container">
        {/* <button onClick={()=>this.setState({ showAlert: true })}>Alert</button> */}
        <SweetAlert
                        show={this.state.showAlert}
                        title="Demo"
                        text="SweetAlert in React"
                        onConfirm={()=>this.setState({ showAlert: false })}
                    />
        <Title />
        <div className="row">
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <Search />
          </div>
          <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
            <Sort />
          </div>
          <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
            <button type="button" className="btn btn-info btn-block marginB10">Add Item</button>
          </div>
        </div>
        <div className="row marginB10">
          <div className="col-md-offset-7 col-md-5">
            <Form />
          </div>
        </div>
        <ListItem />
      </div>
    );
  }
}

export default App;
