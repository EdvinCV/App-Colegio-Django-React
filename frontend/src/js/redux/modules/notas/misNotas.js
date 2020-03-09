import { handleActions } from 'redux-actions';
import { createReducer } from "../baseReducer/baseReducer";

export const { reducers, initialState, actions } = createReducer(
    "misNotas",
    "notas/me",
);

export default handleActions(reducers, initialState);
