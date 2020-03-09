import { createAction } from 'redux-actions';
import { DELETE_CURSO } from '../../constants/index';
import { apiDelete } from '../../api/index';

const urlDeleteCurso = "http://localhost:8000/api/cursos/";

export const deleteCustomer = createAction(DELETE_CURSO,
    id => apiDelete(urlDeleteCurso, id)());
