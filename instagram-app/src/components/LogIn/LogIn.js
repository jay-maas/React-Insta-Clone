import React from 'react';
import { LogInWrapper, Button , H1 , H3 } from '../Style/logInStyles';

class LogIn extends React.Component {
    logIn = event => {
        event.preventDefault()
        const usernameInput = document.querySelector('.logInUsername').value
        localStorage.setItem('user', `${usernameInput}`)
        const passwordInput = document.querySelector('.logInPassword').value
        localStorage.setItem('password', `${passwordInput}`)
        document.location.reload();
    }
    render(){
        return(
            <LogInWrapper>
                <H1>Log In to Instagram-Clone</H1>
                <form>
                    <H3>Enter your username</H3>
                    <input className="logInUsername" type="text" />
                    <H3>Enter your password</H3>
                    <input className="logInPassword" type="text"/>
                </form>
                <Button onClick={this.logIn}>Log In</Button>
            </LogInWrapper>
        )
    }
}

export default LogIn;