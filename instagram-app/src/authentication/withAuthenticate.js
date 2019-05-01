import React from 'react';

const withAuthenticate = NonAuthApp => AuthApp =>
  class extends React.Component {
      constructor(props) {
          super(props);

          this.state={
              isAuth: false
          }
      }
      componentDidMount() {
          if(localStorage.getItem('user')) {
              this.setState({ isAuth: true })
          } else {
              this.setState({ isAuth: false })
          }
      }
    render() {
        return this.state.isAuth ? <AuthApp /> : <NonAuthApp props={this.props} /> 
    }
  };

  export default withAuthenticate;



//   if(localStorage.getItem('user')) {
//     return <AuthApp />
// }  else { 
//     return <NonAuthApp /> 
// }