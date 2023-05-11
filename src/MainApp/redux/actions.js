import { ADD_TO_READING_LIST, REMOVE_FROM_READING_LIST } from './actionTypes';

export const addBookToReadingList = (payload) => ({
	type: ADD_TO_READING_LIST,
	payload,
});

export const removeBookFromReadingList = (payload) => ({
	type: REMOVE_FROM_READING_LIST,
	payload,
});
