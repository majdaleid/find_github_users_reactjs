import React from 'react'
import PropTypes from 'prop-types';
/*
Useritem convert it from class to function
because there is no state
at the end we will convert everything to functions
because of hooks
*/
const Useritem=({user:{login,avatar_url,htm_url}}) =>{

  /*
  discructur the state:
  to get ride of this.state.avatar_url
  */
//  const {login,avatar_url,htm_url}=props.user;

return(
<div className="card text-center">
<img src={avatar_url} alt="" className="round-img" style={{width:'60px'}}/>
<h3>{login}</h3>
<div>
<a href={htm_url} className='btn btn-dark btn-sm my-1'>More</a>
</div>
</div>
);

};
Useritem.propTypes={
  user: PropTypes.object.isRequired
};

export default Useritem;
