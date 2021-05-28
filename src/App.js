import React,{Fragment,Component} from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/layouts/Navbar';
import Alert from './components/layouts/Alert';
import Users from './components/users/Users';
import Search from './components/users/Search';
import About from './components/pages/About';
import axios from 'axios';
class App extends Component {
  state={
    users: [],
    loading: false,
    alert:null
  };

  /*when the data fetched , loading will be true */
/*
  componentDidMount(){
    axios.get('https://api.github.com/users').then(res => console.log(res.data));
  }
*/

/*here just for all users at the beginning if you want to show some users on the homepage*/
//  async componentDidMount(){
//console.log(process.env.REACT_APP_GITHUB_CLIENT_ID);
    /*we want to put the data in our state*/
//    this.setState({loading:true});

  //  const res=await axios.get('https://api.github.com/users');
//      const res=await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
  //  console.log(res.data);

  //  this.setState({ users: res.data,loading:false});
//  }


  /*search github users*/
  /*because it's an arrow function we add async in the parameter and not of

the beginning of the function
  */



searchUsers=async text=>{
  this.setState({loading: true });
console.log(text);
const res=await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
this.setState({ users: res.data.items,loading:false});
};


/* or with fetch

componentDidMount(){
fetch ('')
.then(response=>{
return response.json();
})
.then(users =>{
this.setstate({users:res.data.items})
})



}




*/


/*Clear users from state*/
clearUsers=()=>this.setState({users:[],loading:false});

//Set  setAlert
/*we can write : alert:{msg,type}*/
setAlert=(msg,type) =>{
  this.setState({alert:{msg:msg,type:type }});
  setTimeout(()=>this.setState({alert:null}),5000);
}

/*destructuring*/
  render(){
    //const {users,loading}=this.state;
    const numbers=[1,2,3];
    return (
      <Router>
      <div className="App">
      <Navbar/>
    <div className="container">
    <Alert alert={this.state.alert}/>
  <Switch>
  <Route exact path='/' render={props =>(
      <Fragment>
      <Search
      searchUsers={this.searchUsers}
       clearUsers={this.clearUsers}
      showClear={this.state.users.length>0? true:false}
      setAlert={this.setAlert}
      />
      <Users loading={this.state.loading} users={this.state.users}/>
      </Fragment>
  )} />

<Route exact path='/about' component={About}/>
  </Switch>

      </div>
      </div>
      </Router>
    );
  }
}

export default App;
