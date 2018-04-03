import * as React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'

interface AppState {menuOpen: boolean}
export default class App extends React.Component<null, AppState> {
	constructor(props) {
		super(props)
		this.state = {
			menuOpen: false
		}
	}
	render() {
		return (
			<div>
				<AppBar title='React Toolbox' onLeftIconButtonClick={this.openMenu}/>
				<Drawer 
					open={this.state.menuOpen}
					onRequestChange={(open) => this.setState({menuOpen: open})}
				/>
			</div>
		)
	}
	openMenu = () => {
		this.setState({menuOpen: !this.state.menuOpen})
	}
}