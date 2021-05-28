import React,{Component} from 'react';
import PropTypes from 'prop-types';
export class Search extends Component {
state={
  text:''
};
static propTypes={
  searchUsers:PropTypes.func.isRequired,
  clearUsers:PropTypes.func.isRequired,
  showClear:PropTypes.bool.isRequired,
setAlert:PropTypes.func.isRequired
};

onChange =(e)=>{
this.setState({[e.target.name]:e.target.value});

}

onSubmit =(e)=>{
e.preventDefault();
if(this.state.text ===''){
this.props.setAlert('Please enter something','light');
}
else{
  this.props.searchUsers(this.state.text);
  this.setState({text:''});
}
//console.log(this.state.text);

};
/*here we have to send event to the app component*/
/*this.setState({text:e.target.value});
or e.target.name ,
*/
/*Forms are component level state class component level state*/
/*writing normal function not arrow function , we have to use (bind)
onSubmit={this.onSubmit.bind(this)}

*/


/*now alittle bit destructuring*/
//const {showClear,clearUsers}=this.props
render(){
return (
<div>
<form  onSubmit={this.onSubmit} className="form">
<input type="text" name="text" placeholder="Search Users..." value={this.state.text} onChange={this.onChange}
 />
<input type="submit" value="Search" className="btn btn-dark btn-block"/>
</form>
{this.props.showClear && (
<button className="btn btn-light btn-block" onClick={this.props.clearUsers}>clear</button>  )}

</div>

)
}
}

export default Search
