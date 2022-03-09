import { combineReducers, createStore } from "redux";
import { BaiTapDatVePhimReducer } from "./BaiTapDatVePhimReducer";

const rootReducer = combineReducers({
  BaiTapDatVePhimReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
