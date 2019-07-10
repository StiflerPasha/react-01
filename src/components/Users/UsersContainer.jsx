import { connect }                                    from 'react-redux';
import Users                                          from './Users';
import { follow, describe, setCurrentPage, getUsers } from '../../redux/users_reducer';
import React                                          from 'react';


class UsersContainer extends React.Component {

   componentDidMount() {
	  let { currentPage, pageSize } = this.props;
	  this.props.getUsers(currentPage, pageSize);
   }

   onPageCountChanged = (pageNumber) => {
	  let { pageSize } = this.props;
	  this.props.setCurrentPage(pageNumber);
	  this.props.getUsers(pageNumber, pageSize);
   };

   render() {
	  return (
		 <Users onPageCountChanged={ this.onPageCountChanged } { ...this.props } />
	  );
   }
}

const mapStateToProps = (state) => {
   return {
	  users: state.usersPage.users,
	  pageSize: state.usersPage.pageSize,
	  totalUsersCount: state.usersPage.totalUsersCount,
	  currentPage: state.usersPage.currentPage,
	  isLoading: state.usersPage.isLoading,
   };
};

export default connect(mapStateToProps,
   { follow, describe, setCurrentPage, getUsers })(UsersContainer);