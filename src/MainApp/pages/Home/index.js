import React, { useState } from 'react';
import './styles.css';
import Search from '../../../components/Search';
import Books from '../../../components/Books';
import Axios from 'axios';

const Home = () => {
	const [booksData, setBooksData] = useState({});
	const [isLoading, setIsLoading] = useState(false);

	const handleGetBooksData = async (query) => {
		console.log('handleGetBooksData ');
		setIsLoading(true);
		const url = `https://www.googleapis.com/books/v1/volumes?q=${query}`;
		return Axios.get(url)
			.then((response) => {
				setIsLoading(false);
				console.log('response', response);
				setBooksData(response?.data || {});
			})
			.catch((error) => {
				setIsLoading(false);
				console.log('error', error);
			});
	};
	return (
		<div id="home" className="page">
			<div className="container">
				<Search handleGetBooksData={handleGetBooksData} />
				<Books isFetching={isLoading} data={booksData}  />
			</div>
		</div>
	);
};
export default Home;
