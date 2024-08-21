import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // install ini jangan lupa buat router pages
import { FaSearch, FaFilter } from 'react-icons/fa';
import './story.css';

const StoryList = () => {
	const [stories, setStories] = useState([
		{
			title: 'The Moon that Can’t be Seen',
			writer: 'Rara',
			category: 'Teen Fiction',
			keywords: ['school', 'fiction'],
			status: 'Draft',
		},
		{
			title: 'Given',
			writer: 'Sansa S.',
			category: 'Romance',
			keywords: ['music'],
			status: 'Draft',
		},
		{
			title: 'Fish Swimming In The Sky',
			writer: 'Kaenarita Faly',
			category: 'Fantasy',
			keywords: ['fantasy', 'romance'],
			status: 'Publish',
		},
		{
			title: 'The Science of Fertility PCOS',
			writer: 'Jessie Inchauspé',
			category: 'Non Fiction',
			keywords: ['science', 'PCOS'],
			status: 'Publish',
		},
		{
			title: 'The Glucose Goddess Method',
			writer: 'Jessie Inchauspé',
			category: 'Non Fiction',
			keywords: ['glucose', 'science'],
			status: 'Publish',
		},
	]);

	const [search, setSearch] = useState('');
	const navigate = useNavigate(); // Inisialisasi buat navigasi

	const handleSearch = (e) => {
		setSearch(e.target.value);
	};

	const openFilterModal = () => {
		alert('Filter modal opened!');
	};

	const filteredStories = stories.filter((story) => {
		return (
			story.title.toLowerCase().includes(search.toLowerCase()) ||
			story.writer.toLowerCase().includes(search.toLowerCase())
		);
	});

	const handleAddStory = () => {
		navigate('/add-story'); // nambahin navigasi kee halaman add story
	};

	return (
		<div className="story-list-container">
			<div className="story-list-header">
				<div className="search-box">
					<FaSearch className="search-icon" />
					<input
						type="text"
						placeholder="Search by Writers / Title"
						value={search}
						onChange={handleSearch}
					/>
				</div>
				<div className="header-actions">
					<FaFilter className="filter-icon" onClick={openFilterModal} />
					<button className="add-story-button" onClick={handleAddStory}>
						+ Add Story
					</button>
				</div>
			</div>
			<table className="story-list-table">
				<thead>
					<tr>
						<th>No</th>
						<th>Title</th>
						<th>Writers</th>
						<th>Category</th>
						<th>Keyword</th>
						<th>Status</th>
					</tr>
				</thead>
				<tbody>
					{filteredStories.map((story, index) => (
						<tr key={index}>
							<td>{index + 1}</td>
							<td>{story.title}</td>
							<td>{story.writer}</td>
							<td>{story.category}</td>
							<td>
								{story.keywords.map((keyword, i) => (
									<span key={i} className="keyword-badge">
										{keyword}
									</span>
								))}
							</td>
							<td>
								<span
									className={`status-badge ${
										story.status === 'Publish'
											? 'status-publish'
											: 'status-draft'
									}`}
								>
									{story.status}
								</span>
							</td>
						</tr>
					))}
				</tbody>
			</table>
			<div className="pagination">
				<span>Menampilkan 5 dari 5 data</span>
				<div className="pagination-controls">
					<button className="pagination-button">{'<'}</button>
					<span className="pagination-number">1</span>
					<button className="pagination-button">{'>'}</button>
				</div>
			</div>
		</div>
	);
};

export default StoryList;
