import { createAction } from 'redux-actions';
import { INSERT_NOTA } from '../../constants';
import { apiPost } from '../../api/index';

const urlInsertCurso = "http://localhost:8000/api/notas/";

export const insertNota = createAction(INSERT_NOTA,
    nota => apiPost(urlInsertCurso, nota)());
