import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/dashboard/dashboard';
import StoryList from './components/story/story';
import AddStory from './components/addStory/add';

function App() {
	return (
		<Router>
			<Dashboard>
				<Routes>
					<Route path="/" element={<StoryList />} />
					<Route path="/add-story" element={<AddStory />} />
				</Routes>
			</Dashboard>
		</Router>
	);
}

export default App;
