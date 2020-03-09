import { createAction } from 'redux-actions';
import { INSERT_CURSO } from '../../constants';
import { apiPost } from '../../api/index';

const urlInsertCurso = "http://localhost:8000/api/cursos/";

export const insertCurso = createAction(INSERT_CURSO,
    curso => apiPost(urlInsertCurso, curso)());
