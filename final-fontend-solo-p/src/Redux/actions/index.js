export const ADD_TO_FAVOURITE = "ADD_TO_FAVOURITE";
export const REMOVE_FROM_FAVOURITE = "REMOVE_FROM_FAVOURITE";
export const GET_SONG_SEARCH = "GET_SONG_SEARCH";
export const GET_ARTIST_SEARCH = "GET_ARTIST_SEARCH";
export const SET_COMPANY_SEARCH = "SET_COMPANY-SEARCH";
export const GET_ALBUM_SEARCH = "GET_ALBUM_SEARCH";
export const GET_MAIN_SEARCH_LOADING = "GET_MAIN_SEARCH_LOADING";
export const GET_MAIN_SEARCH_ERROR = "GET_MAIN_SEARCH_ERROR";
export const GET_COMPANY_SEARCH = "GET_COMPANY_SEARCH";

export const addToFavAction = (job) => {
  return {
    type: ADD_TO_FAVOURITE,
    payload: job,
  };
};

export const removeFromFavAction = (i) => ({
  type: REMOVE_FROM_FAVOURITE,
  payload: i,
});
export const getSongs = (query) => {
  console.log(query);
  return async (dispatch) => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "0804dffc02mshffe59d44538faefp143e0bjsne323b0c03419",
        "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
      },
    };
    const baseEndpoint = `https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`;
    try {
      let response = await fetch(baseEndpoint + query, options);
      if (response.ok) {
        const data = await response.json();
        console.log("Songs:", data);
        dispatch({
          type: GET_SONG_SEARCH,
          payload: data,
        });
        setTimeout(() => {
          dispatch({
            type: GET_MAIN_SEARCH_LOADING,
            payload: false,
          });
        }, 100);
      } else {
        console.log("error");

        dispatch({
          type: GET_MAIN_SEARCH_LOADING,
          payload: false,
        });
        dispatch({
          type: GET_MAIN_SEARCH_ERROR,
          payload: true,
        });
      }
    } catch (error) {
      console.log(error);

      dispatch({
        type: GET_MAIN_SEARCH_LOADING,
        payload: false,
      });

      dispatch({
        type: GET_MAIN_SEARCH_ERROR,
        payload: true,
      });
    }
  };
};

export const getArtist = (query) => {
  console.log(query);
  return async (dispatch) => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "0804dffc02mshffe59d44538faefp143e0bjsne323b0c03419",
        "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
      },
    };
    const baseEndpoint = `https://striveschool-api.herokuapp.com/api/deezer/search?q=song`;
    try {
      let response = await fetch(baseEndpoint, options);
      if (response.ok) {
        const data = await response.json();
        console.log("Songs:", data);
        dispatch({
          type: GET_ARTIST_SEARCH,
          payload: data,
        });
        setTimeout(() => {
          dispatch({
            type: GET_MAIN_SEARCH_LOADING,
            payload: false,
          });
        }, 100);
      } else {
        console.log("error");

        dispatch({
          type: GET_MAIN_SEARCH_LOADING,
          payload: false,
        });
        dispatch({
          type: GET_MAIN_SEARCH_ERROR,
          payload: true,
        });
      }
    } catch (error) {
      console.log(error);

      dispatch({
        type: GET_MAIN_SEARCH_LOADING,
        payload: false,
      });

      dispatch({
        type: GET_MAIN_SEARCH_ERROR,
        payload: true,
      });
    }
  };
};

export const getAlbums = async (query) => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "0804dffc02mshffe59d44538faefp143e0bjsne323b0c03419",
      "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    },
  };
  const baseEndpoint = `https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`;
  console.log(query);
  return async (dispatch) => {
    try {
      let response = await fetch(baseEndpoint + query, options);
      if (response.ok) {
        const data = await response.json();
        console.log("Abulms:", data);
        dispatch({
          type: GET_ALBUM_SEARCH,
          payload: data,
        });
        setTimeout(() => {
          dispatch({
            type: GET_MAIN_SEARCH_LOADING,
            payload: false,
          });
        }, 100);
      } else {
        console.log("error");

        dispatch({
          type: GET_MAIN_SEARCH_LOADING,
          payload: false,
        });
        dispatch({
          type: GET_MAIN_SEARCH_ERROR,
          payload: true,
        });
      }
    } catch (error) {
      console.log(error);

      dispatch({
        type: GET_MAIN_SEARCH_LOADING,
        payload: false,
      });

      dispatch({
        type: GET_MAIN_SEARCH_ERROR,
        payload: true,
      });
    }
  };
};
