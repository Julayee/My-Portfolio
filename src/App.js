import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Home from "./container/Home"
import About from "./container/About"
import Work from "./container/Work"
import Project1 from "./container/Project1"
import Project2 from "./container/Project2"
import Project3 from "./container/Project3"
import './index.css'
function App() {

	return (
		<>

			<BrowserRouter>
				<Switch>
					<Route exact path='/' component={Home}></Route>
					<Route exact path='/about' component={About}></Route>
					<Route exact path='/work' component={Work}></Route>
					<Route exact path='/project1' component={Project1}></Route>
					<Route exact path='/project2' component={Project2}></Route>
					<Route exact path='/project3' component={Project3}></Route>

				</Switch>
			</BrowserRouter>

		</>

	);
}

export default App;
