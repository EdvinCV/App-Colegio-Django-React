import { handleActions } from 'redux-actions';
import { createReducer } from "../baseReducer/baseReducer";

export const { reducers, initialState, actions } = createReducer(
    "misCursos",
    "asignacion/me",
);

export default handleActions(reducers, initialState);
