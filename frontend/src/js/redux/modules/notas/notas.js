import { handleActions } from 'redux-actions';
import { createReducer } from "../baseReducer/baseReducer";

export const { reducers, initialState, actions } = createReducer(
    "notas",
    "notas",
);

export default handleActions(reducers, initialState);
