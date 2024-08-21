import React from 'react';
import { useNavigate } from 'react-router-dom';
import './add.css';

const AddStory = () => {
	const navigate = useNavigate();

	const handleSave = () => {
		alert('Story saved successfully!');
		navigate('/story-management');
	};

	return (
		<div className="add-story-container">
			<div className="breadcrumb">
				<span>Stories Management</span> &gt; <span>Add Stories</span>
			</div>
			<h1>Add Stories</h1>
			<form className="story-form">
				<div className="form-row">
					<div className="form-group">
						<label htmlFor="title">Title</label>
						<input type="text" id="title" placeholder="Title" />
					</div>
					<div className="form-group">
						<label htmlFor="writerName">Writer Name</label>
						<input type="text" id="writerName" placeholder="Writer Name" />
					</div>
				</div>
				<div className="form-group">
					<label htmlFor="synopsis">Synopsis</label>
					<textarea id="synopsis" placeholder="Synopsis"></textarea>
				</div>
				<div className="form-row">
					<div className="form-group">
						<label htmlFor="category">Category</label>
						<select id="category">
							<option value="">Category</option>
							<option value="teen-fiction">Teen Fiction</option>
							<option value="romance">Romance</option>
							<option value="fantasy">Fantasy</option>
							<option value="non-fiction">Non Fiction</option>
						</select>
					</div>
					<div className="form-group">
						<label>Tags/Keywords Story</label>
						<div className="tags-input">
							<div className="tag">Best</div>
							<div className="tag">Mental Illness</div>
							<div className="tag">Short</div>
						</div>
					</div>
				</div>
				<div className="form-row">
					<div className="form-group">
						<label htmlFor="coverImage">Cover Image</label>
						<input type="file" id="coverImage" />
					</div>
					<div className="form-group">
						<label htmlFor="status">Status</label>
						<select id="status">
							<option value="draft">Draft</option>
							<option value="publish">Publish</option>
						</select>
					</div>
				</div>
				<div className="add-chapter-button">
					<button type="button">+ Add Chapter</button>
				</div>
				<div className="last-updated">
					<div className="form-group">
						<label>Title</label>
						<p>The Moon that Can’t be Seen</p>
					</div>
					<div className="form-group">
						<label>Last Updated</label>
						<p>18 January 2024</p>
					</div>
				</div>
				<div className="form-footer">
					<button type="button" onClick={() => navigate(-1)}>
						Cancel
					</button>
					<button type="button" onClick={handleSave}>
						Save
					</button>
				</div>
			</form>
		</div>
	);
};

export default AddStory;
