import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';

class App extends Component{
  constructor(){
    super()
    this.state = {
      FullName:"",
      UserName:"",
      Email:"",
      Password:""
    }
  }



  FullNameChange = (e) => {
    this.setState({
      FullName:e.target.value
    })
  }

  
  UserNameChange = (e) => {
    this.setState({
      UserName:e.target.value
    })
  }

  
  EmailChange = (e) => {
    this.setState({
      Email:e.target.value
    })
  }

  
  passwordChange = (e) => {
    this.setState({
      Password:e.target.value
    })
  }

  onSubmitMethod = (e) => {
    e.preventDefault()
    const Data = {
      FullName:this.state.FullName,
      UserName:this.state.UserName,
      Email:this.state.Email,
      Password:this.state.Password
    }
    axios.post('http://localhost:5000/app/signup',Data)
      .then(res => console.log(res.data))
      .catch(err => console.log(err))

      this.setState({
        FullName:'',
        UserName:'',
        Email:'',
        Password:''
      })
  }

  render(){
    return(
    <div className="m-3 p-3" style={{backgroundColor:'pink'}}>
      <div>
        <div className="form m-3">
          <form onSubmit={this.onSubmitMethod}>
            <input className="form-control form-group" name="FullName" type="text" placeholder="Full Name" onChange={this.FullNameChange} value={this.state.FullName}/>
            <input className="form-control form-group" name="UserName" type="text" placeholder="Full username" onChange={this.UserNameChange} value={this.state.UserName}/>
            <input className="form-control form-group" name="Email" type="email" placeholder="Full email" onChange={this.EmailChange} value={this.state.Email}/>
            <input className="form-control form-group" name="Password" type="password" placeholder="Full Name" onChange={this.passwordChange} value={this.state.Password}/>
            <button className="btn btn-danger btn-block">Submit</button>
          </form>
        </div>
      </div>
    </div>
    )
  }
}

export default App;
