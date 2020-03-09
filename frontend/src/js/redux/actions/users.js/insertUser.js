import { createAction } from 'redux-actions';
import { INSERT_USER } from '../../constants';
import { apiPost } from '../../api/index';

const urlInsertUser = "http://localhost:8000/api/user/";

export const insertUser = createAction(INSERT_USER,
    user => apiPost(urlInsertUser, user)());
