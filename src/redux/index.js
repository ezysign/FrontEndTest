import { createStore, applyMiddleware } from "redux";
import { rootReducer } from './reducers';
import thunk from "redux-thunk";
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from "redux-persist";


const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['data']
}

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(persistedReducer, applyMiddleware(thunk));

export const persistor = persistStore(store);

