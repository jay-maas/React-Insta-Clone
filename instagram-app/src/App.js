import React from 'react';
// import dummyData from './dummy-data';
// import CardContainer from './components/PostContainer/CardContainer';
// import SearchBar from './components/SearchBar/SearchBar';
// import Fuse from 'fuse.js';
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
      <div className="App">
        <ComponentFromWithAuthenticate />
        {/* <button onClick={this.logIn}>Log In</button> */}
      </div>
    )
  }
}

export default App;
