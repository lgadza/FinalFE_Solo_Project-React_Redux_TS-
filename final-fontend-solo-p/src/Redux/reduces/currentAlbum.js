import {
  GET_CURRENT_ALBUM_SEARCH,
  GET_MAIN_SEARCH_ERROR,
  GET_MAIN_SEARCH_LOADING,
} from "../actions";

const initialState = {
  search: [],
  isLoading: true,
  isError: false,
};

const getAlbums = (state = initialState, action) => {
  switch (action.type) {
    case GET_CURRENT_ALBUM_SEARCH:
      return {
        ...state,
        search: action.payload,
      };
    case GET_MAIN_SEARCH_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };

    case GET_MAIN_SEARCH_ERROR:
      return {
        ...state,
        isError: action.payload,
      };

    default:
      return state;
  }
};

export default getAlbums;
