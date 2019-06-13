import {connect} from "react-redux";
import Users from "./Users";
import {follow, setUsers, describe, setCurrentPage, checkLoading} from "../../redux/users_reducer";
import React from "react";
import {usersAPI} from "../../api/api";


class UsersContainer extends React.Component {

	 componentDidMount() {
			let {currentPage, pageSize} = this.props;
			this.props.checkLoading(true);
			usersAPI.getUsers(currentPage, pageSize)
			.then(users => {
				 this.props.setUsers(users);
				 this.props.checkLoading(false);
			});
	 }

	 onPageCountChanged = (pageNumber) => {
			let {pageSize} = this.props;
			this.props.setCurrentPage(pageNumber);
			this.props.checkLoading(true);
			usersAPI.getUsers(pageNumber, pageSize)
			.then(users => {
				 this.props.setUsers(users);
				 this.props.checkLoading(false)
			});
	 };

	 render() {
			return (
				<Users onPageCountChanged={this.onPageCountChanged} {...this.props}/>
			)
	 }
}

const mapStateToProps = (state) => {
	 return {
			users: state.usersPage.users,
			pageSize: state.usersPage.pageSize,
			totalUsersCount: state.usersPage.totalUsersCount,
			currentPage: state.usersPage.currentPage,
			isLoading: state.usersPage.isLoading
	 }
};

export default connect(mapStateToProps,
	{follow, describe, setUsers, setCurrentPage, checkLoading})(UsersContainer);