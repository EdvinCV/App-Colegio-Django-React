import { handleActions } from 'redux-actions';
import { INSERT_NOTA } from '../constants/index';

export const notasRed = handleActions({
    [INSERT_NOTA]: (state, action) => [...state, action.payload],

}, []);
