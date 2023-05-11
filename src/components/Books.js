import React from 'react';
import BookCard from './BookCard';

const Books = ({ data, isFetching }) => {
	if (isFetching) {
		return <p>Loading...</p>;
	}
	const { items: books, totalItems } = data;

	return (
		<div className="books">
			<>
				<div className="books-list">
					{books?.map((book) => (
						<BookCard key={book.id} book={book} from='booksList'/>
					))}
				</div>
			</>
		</div>
	);
};

export default Books;
