import React, {Component} from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import withNavigation from './WithNavigation.jsx'

class TodoApp extends Component{
    render(){
        const LoginComponentWithNavigation = withNavigation(LoginComponent);
        return (
            <div className="TodoApp">
                <Router>
                    <Routes>
                        <Route path="/" element={<LoginComponent/>}/>
                        <Route path="/login" element={<LoginComponentWithNavigation />} />
                        <Route path="/welcome" element={<WelcomeComponent/>}/>
                    </Routes>
                </Router>
            </div>
        )
    }
}

class WelcomeComponent extends Component{
    render(){
        return(
            <div>Welcome in28minutes</div>
        )
    }
}


class LoginComponent extends Component {

    constructor(props){
        super(props)

        this.state = {
            username : 'in28minutes',
            password : '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }

        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }

    handleChange(event){
        //console.log(this.state)
        this.setState({[event.target.name]:event.target.value})
    }

    loginClicked(){
        if(this.state.username=='in28minutes' && this.state.password=='dummy'){
            this.props.navigate("/welcome")
            //this.setState({showSuccessMessage:true})
            //this.setState({hasLoginFailed:false})
        }
        else{
            this.setState({showSuccessMessage:false})
            this.setState({hasLoginFailed:true})
        }
    }


    render(){
      return(
        <div>
            {this.state.hasLoginFailed && <div>Invalid Credentials</div>}
            {this.state.showSuccessMessage && <div>Login Sucessful</div>}
          User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
          Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
          <button onClick={this.loginClicked}>Login</button>
        </div>
      )
    }
  }


export default TodoApp