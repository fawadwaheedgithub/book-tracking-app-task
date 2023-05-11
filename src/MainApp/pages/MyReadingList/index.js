import React from 'react';
import { useSelector } from 'react-redux';
import BookCard from '../../../components/BookCard';

const MyReadingList = () => {
	const myReadingList = useSelector((state) => state?.books?.myReadingList);
	console.log('myReadingList :', myReadingList);

	if (!myReadingList?.length) {
		return <p>No items to show in my reading list</p>;
	}
	return (
		<>
			<div className="books-list">
				{myReadingList?.map((book) => (
					<BookCard key={book.id} book={book} from="readingList" />
				))}
			</div>
		</>
	);
};

export default MyReadingList;
