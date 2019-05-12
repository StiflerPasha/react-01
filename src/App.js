import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import SideBarContainer from "./components/SideBar/SideBarContainer";
import UsersContainer from "./components/Users/UsersContainer";


const App = (props) => {
		return (
			<div className='app-wrapper'>
					<Header/>
					<SideBarContainer store={props.store}/>
					<div className='app-wrapper-content'>
							<Route path='/profile'
										 render={() =>
											 <Profile store={props.store}/>}/>
							<Route path='/dialogs'
										 render={() =>
											 <DialogsContainer store={props.store}/>}/>
							<Route path='/news' render={() => <News/>}/>
							<Route path='/music' render={() => <Music/>}/>
							<Route path='/settings' render={() => <Settings/>}/>
							<Route path='/users' render={() => <UsersContainer/>}/>
					</div>
			</div>
		);
};

export default App;