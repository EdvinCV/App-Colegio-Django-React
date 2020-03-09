import { handleActions } from 'redux-actions';
import { INSERT_CURSO, GET_MIS_CURSOS } from '../constants/index';


export const cursosRed = handleActions({
    [INSERT_CURSO]: (state, action) => [ ...state, action.payload],
    [GET_MIS_CURSOS]: (state, action) => [ ...action.payload],

}, []);
