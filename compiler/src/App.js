import React from 'react';
import './App.css';
import Home from './components/home/Home';
import { BrowserRouter as Router } from "react-router-dom";

class App extends React.Component {

	render() {	
	  return (
	    <>
	    <Router>
        <div>
		    <Home />
		</div>
		</Router>
	    </>
	  );
	}
}

export default App;