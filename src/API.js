import axios from 'axios';

var urlPrefix = 'http://localhost:4020/api'

var API = {
    //USER
    serverUrl : 'http://localhost:4020/',
    addUser: (data) => {
        return axios.post(urlPrefix + '/users/', data)
    },
    authenticate: (data) => {
        return axios.post(urlPrefix + '/users/authenticate', data)
    },

    getSingleUser: (id) => {
        return axios.get(urlPrefix + '/users/' + id)
    },

    deleteUser: (id) => {
        return axios.delete(urlPrefix + '/users' + id)
    },


    //SHARES
    addShare: (data) => {
        return axios.post(urlPrefix + '/shares', data)
    },

    getShares: () => {
        return axios.get(urlPrefix + '/shares')
    },

    deleteShares: (id) => {
        return axios.delete(urlPrefix + '/shares/' + id)
    },

    //Title
    addTitle: (data) => {
        return axios.post(urlPrefix + '/title', data)
    },

    getTitle: () => {
        return axios.get(urlPrefix + '/title')
    },

    deleteTitle: (id) => {
        return axios.delete(urlPrefix + '/title/' + id)
    },

    uploadFile: (formData) => {
        var settings = { headers: { 'Content-Type': 'multipart/form-data' } }
        return axios.post(urlPrefix + '/upload', formData, settings)
    }
}

export default API
