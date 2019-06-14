import React, {Component} from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {getAuth} from "../../redux/auth_reducer";

class HeaderContainer extends Component {

	 componentDidMount() {
			this.props.getAuth()
	 }

	 render() {
			return (
				<Header {...this.props}/>
			);
	 }
}

const mapStateToProps = (state) => {
	 return {
			isAuth: !state.auth.isLoading,
			email: state.auth.email,
	 }
};

export default connect(mapStateToProps, {getAuth})(HeaderContainer);