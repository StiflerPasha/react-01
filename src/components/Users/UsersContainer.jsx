import {connect} from "react-redux";
import Users from "./Users";
import {follow, setUsers, describe, setCurrentPage, checkLoading} from "../../redux/users_reducer";
import React from "react";
import * as axios from "axios";


class UsersContainer extends React.Component {

	 componentDidMount() {
			let {pageSize, currentPage} = this.props;
			this.props.checkLoading(true);
			axios.get(`https://randomuser.me/api/?page=${currentPage}&results=${pageSize}&seed=foobar`)
			.then(response => {
				 this.props.setUsers(response.data.results);
				 this.props.checkLoading(false);
				 console.log(response.data.results)
			});
	 }

	 onPageCountChanged = (pageNumber) => {
			this.props.setCurrentPage(pageNumber);
			this.props.checkLoading(true);
			axios.get(`https://randomuser.me/api/?page=${pageNumber}&results=${this.props.pageSize}&seed=foobar`)
			.then(response => {
				 this.props.setUsers(response.data.results);
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