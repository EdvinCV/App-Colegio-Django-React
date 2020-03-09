import { createAction } from 'redux-actions';
import { GET_MIS_CURSOS } from '../../constants';
import { apiGet } from '../../api/index';

const urlGetMisCursos = "http://localhost:8000/api/asignacion/me";

export const getMisCursos = createAction(GET_MIS_CURSOS, apiGet(urlGetMisCursos));
