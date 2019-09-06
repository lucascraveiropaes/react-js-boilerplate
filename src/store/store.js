import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage                          from "redux-persist/lib/storage";
import autoMergeLevel2                  from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import rootReducer                      from "./index";
import ReduxThunk                       from "redux-thunk";

const persistConfig = {
    key: "react-js-boilerplate-root",
    storage: storage,
    whitelist: ["user"],
    stateReconciler: autoMergeLevel2
};

const pReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(pReducer, {}, applyMiddleware(ReduxThunk));
export const persistor = persistStore(store);
