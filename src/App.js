import React, {Component} from 'react';
import 'react-tabs/style/react-tabs.css';
import './App.css';
// import './assets/react-toolbox/theme.css';

// import theme from './assets/react-toolbox/theme.js';
// import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
// import UploadForm from './components/UploadForm';

import Tabs from './components/Tabs';

class App extends Component {

	render() {
		return (
			<Tabs forceRenderTabPanel defaultIndex={1} />
			// <ThemeProvider theme={theme}>
			// 	<Tabs />
			// </ThemeProvider>
		);
	}
}

export default App;
