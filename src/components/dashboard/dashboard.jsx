import React from 'react';
import { FaBook, FaHome } from 'react-icons/fa';
import './dashboard.css';

const Dashboard = ({ children }) => {
	return (
		<div className="dashboard">
			<aside className="sidebar">
				<div className="sidebar-header">
					<h2>STORYKU</h2>
				</div>
				<ul className="sidebar-menu">
					<li>
						<FaHome />
						<span>Dashboard</span>
					</li>
					<li className="active">
						<FaBook />
						<span>Story Management</span>
					</li>
				</ul>
			</aside>
			<main className="content">{children}</main>
		</div>
	);
};

export default Dashboard;
