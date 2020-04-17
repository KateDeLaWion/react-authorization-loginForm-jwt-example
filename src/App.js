import React from 'react';
import logo from './logo.svg';
import './App.css';
import AuthService from './Components/AuthService';
import WithAuth from './Components/WithAuth';

const Auth = new AuthService();

class App extends React.Component {
  
  constructor(props) {
    super(props);

  }
  
  handleLogout(){
    Auth.logout()
    this.props.history.replace('/login')
  }
  
  render(){
  return(
    <div className="App">
        <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome {this.props.user.username}</h2>
        </div>
        <p className="App-intro">
            <button type="button" className="form-submit" onClick={this.handleLogout.bind(this)}>Logout</button>
        </p>
        </div>
)
  }


}

export default WithAuth(App);

// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
