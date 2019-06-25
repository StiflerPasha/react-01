import {connect} from "react-redux";
import SideBar from "./SideBar";

const mapStateToProps = (state) => {
    return {
        menu: state.sideBar.menu,
        /*friends: state.friends,*/
    }
};

const SideBarContainer = connect(mapStateToProps)(SideBar);

export default SideBarContainer;