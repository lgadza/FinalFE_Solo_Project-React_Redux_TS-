import {
  configureStore,
  getDefaultMiddleware,
  combineReducers,
} from "@reduxjs/toolkit";
// import getSongs from "../reducers/getSongs";
import getSongs from "../reduces/songResults";
import currentAlbum from "../reduces/currentAlbum";
import getAlbums from "../reduces/albumSearch";
import getArtist from "../reduces/artistSearch";
import localStorage from "redux-persist/lib/storage";
import { encryptTransform } from "redux-persist-transform-encrypt";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "root",
  storage: localStorage,
  transforms: [
    encryptTransform({
      secretKey: "E1A2G3LE",
    }),
  ],
};
//  process.env.REACT_APP_SECRET_KEY

const bigReducer = combineReducers({
  songs: getSongs,
  albums: getAlbums,
  artist: getArtist,
  currentAlbum: currentAlbum,
  // favourite: mainReducer,
  // company: companySearch,
  // jobSearch: searchResultsReducer,
});
const persistedReducer = persistReducer(persistConfig, bigReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
export const persistor = persistStore(store);
