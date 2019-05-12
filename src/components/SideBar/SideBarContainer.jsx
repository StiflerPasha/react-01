import {connect} from "react-redux";
import SideBar from "./SideBar";

const mapStateToProps = (state) => {
    return {
        menu: state.sideBar.menu,
        friends: state.friends,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {}
};

const SideBarContainer = connect(mapStateToProps, mapDispatchToProps)(SideBar);

export default SideBarContainer;