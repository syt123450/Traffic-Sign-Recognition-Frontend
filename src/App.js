import React, {Component} from 'react';
import './App.css';

import './assets/react-toolbox/theme.css';
import theme from './assets/react-toolbox/theme.js';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
import UploadForm from './components/UploadForm';

class App extends Component {

	render() {
		return (
			<ThemeProvider theme={theme}>
				<UploadForm />
			</ThemeProvider>
		);
	}
}

export default App;
