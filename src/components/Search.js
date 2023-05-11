import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import debounce from 'lodash/debounce';

const Search = ({ handleGetBooksData }) => {
	const handleOnSubmit = (e) => {
		e.preventDefault();
	};
	const debouncedGetBooks = debounce((query) => {
		handleGetBooksData(query);
	}, 700);

	const onInputChange = (e) => {
		debouncedGetBooks(e.target.value);
	};

	return (
		<div className="search-books">
			<Form className="search-books--form" onSubmit={handleOnSubmit}>
				<Form.Group controlId="formBasicEmail">
					<Form.Control
						type="text"
						onChange={onInputChange}
						placeholder="Search book  by title , author, ISBN"
					/>
					<Form.Text className="text-muted">
					</Form.Text>
				</Form.Group>
				<Button variant="primary" type="submit">
					Search
				</Button>
			</Form>
		</div>
	);
};

export default Search;
