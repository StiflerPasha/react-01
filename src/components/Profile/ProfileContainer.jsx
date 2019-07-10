import React                          from 'react';
import classes                        from './Profile.module.css';
import UserAvatar                     from './UserAvatar/UserAvatar';
import MyPostsContainer               from './MyPosts/MyPostsContainer';
import UserInfo                       from './UserInfo/UserInfo';
import { connect }                    from 'react-redux';
import { withRouter }                 from 'react-router-dom';
import { getProfile, setUserProfile } from '../../redux/profile_reducer';

import ava from '../../assets/images/ava.jpg';


class ProfileContainer extends React.Component {

   componentDidMount() {
	  let id = this.props.match.params.id || this.props.defaultId;
	  this.props.getProfile(id);
   }

   componentWillReceiveProps(nextProps, nextContext) {
	  if (nextProps.match.params.id !== this.props.match.params.id) {
		 let id = nextProps.match.params.id;
		 this.props.getProfile(id);
	  }
   }

   render() {
	  let { fullName, photos } = this.props.profile;


	  return this.props.isLoading
		 ? (<div>Loading</div>)
		 : (<div className={ classes.profile_page }>
			<UserAvatar className={ classes.info }
						ava={ photos.large || ava } />
			<UserInfo className={ classes.data }
					  name={ fullName } />
			<MyPostsContainer
			   className={ classes.posts } />
		 </div>);
   }
}

const mapStateToProps = (state) => ({
   profile: state.profilePage.profile,
   isLoading: state.profilePage.isLoading,
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer);
export default connect(mapStateToProps, { setUserProfile, getProfile })(WithUrlDataContainerComponent);