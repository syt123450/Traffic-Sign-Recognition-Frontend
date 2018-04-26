import React, {Component} from 'react';
import 'react-tabs/style/react-tabs.css';
import './App.css';
import Tabs from './components/Tabs';

class App extends Component {

	render() {
		return (
			<Tabs forceRenderTabPanel defaultIndex={1} />
		);
	}
}

export default App;
