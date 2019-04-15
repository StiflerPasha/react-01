import {connect} from "react-redux";
import Navbar from "./Navbar";

const mapStateToProps = (state) => {
    return {
        menu: state.sideBar.menu,
        friends: state.friends,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {}
};

const SideBarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar);

export default SideBarContainer;