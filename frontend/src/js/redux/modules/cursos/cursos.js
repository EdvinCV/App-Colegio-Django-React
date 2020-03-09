import { handleActions } from 'redux-actions';
import { createReducer } from "../baseReducer/baseReducer";

export const { reducers, initialState, actions } = createReducer(
    "cursos",
    "cursos",
    "CursoForm"
);

export default handleActions(reducers, initialState);
