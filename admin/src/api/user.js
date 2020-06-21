import { createAPI, createFormAPI } from '@/api/request';

export const login = data =>
    createFormAPI('/login', 'post', data)
