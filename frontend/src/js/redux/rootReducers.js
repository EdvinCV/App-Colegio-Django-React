import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import login from './modules/cuenta/login';
import register from './modules/cuenta/register';
import profile from './modules/cuenta/profile';
import usuarios from './modules/usuarios/usuarios';
import notificaciones from './modules/notificaciones/notificaciones';
import cursos from './modules/cursos/cursos';
import asignaciones from './modules/asignaciones/asignaciones';
import { cursosRed } from './reducers/cursos';
import { asignacionesRed } from './reducers/asignaciones';
import { notasRed } from './reducers/notas';
import { usersRed } from './reducers/users';
import misCursos from './modules/cursos/misCursos';
import notas from './modules/notas/notas';
import misNotas from './modules/notas/misNotas';
import admins from './modules/usuarios/getProfesores';
import alumnos from './modules/usuarios/getAlumnos';

export default combineReducers({
    form: formReducer,
    login,
    register,
    profile,
    usuarios,
    routing,
    notificaciones,
    cursos,
    cursosRed,
    asignaciones,
    asignacionesRed,
    notas,
    notasRed,
    misCursos,
    misNotas,
    admins,
    alumnos,
    usersRed,
});
