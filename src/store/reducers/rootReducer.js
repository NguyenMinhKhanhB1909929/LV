import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "redux";
import { createStore } from "redux";
import persistStore from "redux-persist/es/persistStore";

import authReducer from "./authReducer";
import testReducer from "./testReducer";
import jobReducer from "./jobReducer";
import offerReducer from "./offerReducer";

const persistCommonConfig = {
  storage,
  stateReconciler: autoMergeLevel2,
};

const authPersistConfig = {
  ...persistCommonConfig,
  key: "auth",
  whitelist: ["token", "isLoggedIn"],
};

const rootReducer = combineReducers({
  test: testReducer,
  auth: persistReducer(authPersistConfig, authReducer),
  job: jobReducer,
  offer: offerReducer,
});

const store = createStore(rootReducer);

export const persistor = persistStore(store);
export default store;
