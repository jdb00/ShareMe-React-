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

    updateUser: (id,data) => {
        return axios.put(urlPrefix + '/users/' + id,data)
    },

    getUser: () => {
        return axios.get(urlPrefix + '/users')
    },

    getSingleUser: (id, data) => {
        return axios.get(urlPrefix + '/users/' + id, data)
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

    updateShares: (id,data) => {
        return axios.put(urlPrefix + '/shares/' + id,data)
    },

    deleteShares: (id) => {
        return axios.delete(urlPrefix + '/shares/' + id)
    },

    getSingleShare : (id) => {
        return axios.get(urlPrefix+'/shares/'+id)
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
