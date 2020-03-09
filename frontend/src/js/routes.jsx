import React from 'react';
import {
    Route,
    Switch,
    Redirect,
} from 'react-router-dom';
import { NotificationContainer } from 'react-notifications';

import {Login, Profile, Registro} from './common/components/LoginRegister';
import Demo from './common/components/Demo/Demo';
import ProtectedRoute from './ProtectedRoute';
import Examples from './common/components/Examples/Basic';
import NotFound from './common/components/layout/NotFound/NotFound';

import '../assets/fonts/fonts.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Grids from "./common/components/Examples/Grids";
import Notificaciones from './common/components/Examples/Notificaciones';
import ExampleTabs from './common/components/Examples/Tabs/Tabs';
import CursosContainer from './common/containers/Cursos/index';
import CursoFormContainer from './common/containers/Cursos/CursosFormContainer';
import AsignacionesContainer from './common/containers/AsignacionCursos/index';
import AsignacionesFormContainer from './common/containers/AsignacionCursos/AsignacionesFormContainer';
import NotasContainer from './common/containers/AsignacionNotas/index';
import NotasFormContainer from './common/containers/AsignacionNotas/NotasFormContainer';
import MisCursosContainer from './common/containers/Cursos/indexMisCursos';
import MisNotasContainer from './common/containers/AsignacionNotas/MisNotasContainer';
import UsersContainer from './common/containers/Users/UsersContainer';


require('../../node_modules/font-awesome/css/font-awesome.css');
require('../../node_modules/bootstrap/dist/css/bootstrap.css');

require('../style/index.css');

module.exports = (
    <div>
        <div className="container__content">
            <Switch>
                <Route exact path="/login" component={Login} />
                <Route exact path="/registro" component={Registro} />
                <ProtectedRoute exact path="/" component={Demo} />
                <ProtectedRoute exact path="/page2" component={Examples} />
                <ProtectedRoute exact path="/user-profile" component={Profile} />
                <ProtectedRoute exact path="/users" component={UsersContainer} />
                <ProtectedRoute exact path="/grids" component={Grids} />
                <ProtectedRoute exact path="/notifications" component={Notificaciones} />
                <ProtectedRoute exact path="/tabs" component={ExampleTabs} />
                <ProtectedRoute exact path="/cursos" component={CursosContainer} />
                <ProtectedRoute exact path="/cursos/nuevo" component={CursoFormContainer} />
                <ProtectedRoute exact path="/cursos/edit" component={CursoFormContainer} />
                <ProtectedRoute exact path="/asignacion" component={AsignacionesContainer} />
                <ProtectedRoute exact path="/asignacion/nuevo" component={AsignacionesFormContainer} />
                <ProtectedRoute exact path="/asignacion/me" component={MisCursosContainer} />
                <ProtectedRoute exact path="/notas" component={NotasContainer} />
                <ProtectedRoute exact path="/notas/nuevo" component={NotasFormContainer} />
                <ProtectedRoute exact path="/notas/me" component={MisNotasContainer} />
                <Route component={NotFound} />
            </Switch>
        </div>
        <NotificationContainer />
    </div>
);
