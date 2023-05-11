import { ADD_TO_READING_LIST, REMOVE_FROM_READING_LIST } from './actionTypes';

const initialState = {
	myReadingList: [],
};

export const books = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TO_READING_LIST:
			console.log('ADD_TO_READING_LIST :', state, action.payload);
      if(state.myReadingList?.find(b=>b.id === action.payload.id)){
        return state
      }
      return {
        ...state,
        myReadingList:[
          ...state.myReadingList,
          action.payload
        ]
      }
		case REMOVE_FROM_READING_LIST:
			console.log('REMOVE_FROM_READING_LIST :', initialState, action.payload);
      return {
        ...state,
        myReadingList:state?.myReadingList?.filter(r=>r?.id !== action.payload?.id)
      }
		default:
			return state;
	}
};
