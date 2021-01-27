import React from 'react'
import './loginComponent.scss'

class loginComponent extends React.Component{

   
  constructor(props){
    super(props)

    this.state = {
        email: "",
        password: ""
    }

  }

  handleChange(e){
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
        [name]: value
    })
  }

  render(){
    return (
      <div>
        <div className="auth">
            <div className="auth__body">
                <form className="auth__form">
                <div className="auth__form_body">
                    <h3 className="auth__form_title">Sign in</h3>
                    <div>
                    <div className="form-group">
                        <label className="text-uppercase small">Email</label>
                        <input className="form-control" type="email" name="email" value={this.state.email} onChange={(e) => this.handleChange(e)}  placeholder="Enter email"/>
                    </div>
                    <div className="form-group">
                        <label className="text-uppercase small">Password</label>
                        <input type="password" className="form-control" name="password" value={this.state.password} onChange={(e) => this.handleChange(e)} placeholder="Password"/>
                    </div>
                    </div>
                </div>
                <div className="auth__form_actions">
                    <button className="btn btn-primary btn-lg btn-block">
                    LOGIN
                    </button>
                    <div className="mt-2">
                    <a className="small text-uppercase">
                        Forgot password
                    </a>
                    </div>
                </div>
                {console.log(this.state)}
                </form>
            </div>
        </div>
      </div>
    );
  }
}

export default loginComponent;