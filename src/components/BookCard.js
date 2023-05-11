import React from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import {
	addBookToReadingList,
	removeBookFromReadingList,
} from '../MainApp/redux/actions';

const BookCard = ({ book, from = 'booksList' }) => {
	const dispatch = useDispatch();
	const { title, subtitle, imageLinks, authors } = book.volumeInfo;

	const handleAddToReadingList = () => {
		if (from === 'booksList') {
			dispatch(addBookToReadingList(book));
			alert('Added to my reading list');
		} else {
			dispatch(removeBookFromReadingList(book));
			alert('Removed from my reading list');
		}
	};
	return (
		<div className="book">
			<Card>
				{imageLinks ? (
					<Card.Img
						className="book-image"
						variant="top"
						src={imageLinks.thumbnail}
					/>
				) : null}
				<Card.Body>
					<Card.Title className="book-title">{title}</Card.Title>
					<Card.Subtitle>{subtitle}</Card.Subtitle>
					<Card.Text className="book--description">
						{authors?.toString()}
					</Card.Text>
					<Button onClick={handleAddToReadingList}>{`${
						(from === 'booksList' && 'Add to ') || 'Remove From '
					}reading list`}</Button>
				</Card.Body>
			</Card>
		</div>
	);
};

export default BookCard;
