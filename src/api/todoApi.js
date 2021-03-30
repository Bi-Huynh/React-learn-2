import axiosClient from './axiosClient.js';
// import axios from 'axios';

export const getAll = (params) => {
    const url = '/todos';
    return axiosClient.get(url, { params });
};

export const created = (newTodo) => {
    const url = '/todos/store';
    return axiosClient.post(url, newTodo);
};

export const deletedId = (id) => {
    const url = `/todos/${id}`;
    return axiosClient.delete(url);
};

export const deleteData = (data) => {
    const url = '/todos';
    return axiosClient.delete(url, { data });
};

export const deleteAll = () => {
    const url = '/todos/deleteAll';
    return axiosClient.delete(url);
};

export const update = (data) => {
    const url = '/todos';
    return axiosClient.patch(url, data);
};
