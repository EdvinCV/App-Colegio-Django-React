import { handleActions } from 'redux-actions';
import { INSERT_ASIGNACION } from '../constants/index';

export const asignacionesRed = handleActions({
    [INSERT_ASIGNACION]: (state, action) => [...state, action.payload],
}, []);
