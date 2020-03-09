import { createAction } from 'redux-actions';
import { INSERT_ASIGNACION } from '../../constants/index';
import { apiPost } from '../../api/index';

const urlInsertAsignacion = "http://localhost:8000/api/asignacion/";

export const insertAsignacion = createAction(INSERT_ASIGNACION,
    asignacion => apiPost(urlInsertAsignacion, asignacion)());
