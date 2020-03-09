import { handleActions } from 'redux-actions';
import { createReducer } from "../baseReducer/baseReducer";


// ------------------------------------
// Constants
// ------------------------------------

export const { reducers, initialState, actions } = createReducer(
    "asignaciones",
    "asignacion",
    "AsignacionForm",
);

export default handleActions(reducers, initialState);
