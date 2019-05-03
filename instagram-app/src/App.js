import React from 'react';
import PostsPage from './components/PostContainer/PostsPage';
import LogIn from './components/LogIn/LogIn';
import withAuthenticate from './authentication/withAuthenticate';


const logInAuth = PassedComp => props => {
  const logIn = props;
  return <PassedComp onClick={logIn} />
}

const LogInAuth = logInAuth(LogIn) 

const ComponentFromWithAuthenticate = withAuthenticate(LogInAuth)(PostsPage)

class App extends React.Component {
  render() {
    return (
      <>
        <ComponentFromWithAuthenticate />
      </>
    )
  }
}

export default App;
