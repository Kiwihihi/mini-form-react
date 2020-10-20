import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      txtUserName:'',
      txtPassWord: '',
      txtDesc: '',
      gender: 1,

    }
    this.onHandleChange = this.onHandleChange.bind(this);
    this.onHandleSubmit = this.onHandleSubmit.bind(this);

  }
  onHandleChange(e){
    var target = e.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value
    })
  }

  onHandleSubmit(e){
    e.preventDefault();
    console.log(this.state);
  }
  onReset = () => {
    this.setState({
      txtUserName:'',
      txtPassWord: '',
      txtDesc: '',
      gender: 1,

    })
  }
  render() {
    return (
      <div className = "container mt-30">
        <div className = "row">
          <div className = "col-xs 8 col-sm-8 col-md-8 col-lg-8">
              <form onSubmit = {this.onHandleSubmit}>
              <div className="form-group">
                <label >Form</label>
                <input className="form-control"
                  name = "txtUserName"
                  onChange = {this.onHandleChange}
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input type="password" 
                  className="form-control" 
                  placeholder="Password"
                  name = "txtPassWord"
                  onChange = {this.onHandleChange}
                  />
              </div>
              <div className="form-group">
                <label>Ib for me</label>
                <textarea className="form-control" 
                  name = "txtDesc"
                  value = {this.state.txtDesc}
                  onChange = {this.onHandleChange}
                  rows="3"></textarea>
              </div>
              <label>Gender</label>
                <select className = "form-control mb-20" 
                  name = "gender"
                  value = {this.state.gender}
                  onChange = {this.onHandleChange}
                  >
                  <option value = {0}>Female</option>
                  <option value = {1}>Male</option>

                </select>

              <button type="submit" className="btn btn-primary">
                Submit</button>
              <input className="btn btn-secondary ml-10" 
                type="reset" 
                onClick = {this.onReset}
                 />
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
