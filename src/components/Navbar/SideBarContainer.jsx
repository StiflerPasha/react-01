import {connect} from "react-redux";
import Navbar from "./Navbar";

let mapStateToProps = (state) => {
    return {
        menu: state.sideBar.menu,
        friends: state.friends,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {}
};

const SideBarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar);

export default SideBarContainer;