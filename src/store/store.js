import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { authReducer } from "../reducers/authReducer";
import thunk from "redux-thunk";
import { uiReducers } from "../reducers/uiReducers";
import { notesReducers } from "../reducers/notesReducers";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const reducers = combineReducers({
  auth: authReducer,
  ui: uiReducers,
  notes: notesReducers,
});

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
