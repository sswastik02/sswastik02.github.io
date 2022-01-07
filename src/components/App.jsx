import React from 'react';
import getUserDetails from 'services/getUserDetails';
import User from 'Models/User';
import Profile from './Profile/profile';
import Repos from './Repos/repos';  
import getUserRepoDetails from 'services/getUserRepoDetails';
class App extends React.Component {

  state = {
    user: new User({}),
    repos:[],
  }

  componentDidMount(){
    getUserDetails("sswastik02").then((userDetails)=>{
      getUserRepoDetails(userDetails.reposUrl).then((repos)=>{
        this.setState({
          user:userDetails,
          repos:repos
        })
      })
    })
  }

  render() { 
    return <div>
      <Profile user = {this.state.user}/>
      <Repos repos = {this.state.repos}/>
    </div>;
  }
}
 
export default App;