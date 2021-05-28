import React from 'react'
import PropTypes from 'prop-types';
import Useritem from './Useritem';
import Spinner from '../layouts/Spinner';

/*here using desctrutur*/
const Users =({users,loading}) =>{
/*state={
  users:[
    {
      id:'1',
      login:'mojombo',
      avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4',
      htm_url:'https://github.com/mojombo'
    },
    {
      id:'2',
      login:'defunkt',
      avatar_url: 'https://avatars.githubusercontent.com/u/2?v=4',
      htm_url:'https://github.com/defunkt'
    },
    {
      id:'3',
      login:'pjhyett',
      avatar_url: 'https://avatars.githubusercontent.com/u/3?v=4',
      htm_url:'https://github.com/pjhyett'
    }
  ]
};
there is no state that's why convert it to functional component
*/

/*

key added because every element should be unique

{this.state.users.map(user=>(
*/

/*now instead of this.props.users we use users because we have destructur  */
if(loading){
  return <Spinner/>
} else {
  return(
  <div style={userStyle}>
    {users.map(user=>(
    <Useritem key={user.id} user={user}/>
  ))}
  </div>
  );




}




}
const userStyle={
  display:'grid',
  gridTemplateColumns:'repeat(3,1fr)',
  gridGap:'1rem'
}

Users.propTypes={
  users: PropTypes.array.isRequired,
  loading:PropTypes.bool.isRequired
};

export default Users;
