import React from 'react';

import dummyData from './dummy-data';
import CardContainer from './components/PostContainer/CardContainer';
import SearchBar from './components/SearchBar/SearchBar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData:dummyData
    }
  }

  render() {
    const userData = this.state.userData
    let usersData = userData.map( user =>
        <CardContainer user={user} key={user.username} />
      )

    return (
      <div className="App">
        <SearchBar />
        {usersData}
      </div>
    )
  }
}


export default App;
