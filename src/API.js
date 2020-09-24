import axios from 'axios';
var urlPrefix = 'http://localhost:4020/api'

var API = {
    serverUrl: 'http://localhost:4020/',

    /*Users*/
    addUser: (data) => {
        return axios.post(urlPrefix + '/users', data)
    },
    getUser: () => {
        return axios.get(urlPrefix + '/users')
    },
    getSingleUser: (id) => {
        return axios.get(urlPrefix + '/users/' + id)
    },
    updateUser: (id,data) => {
        return axios.put(urlPrefix + '/users/' + id,data)
    },
    deleteUser: (id) => {
        return axios.delete(urlPrefix + '/users/' + id)
    },
    authenticate: (data) => {
        return axios.post(urlPrefix + '/users/authenticate', data)
    },

    /*Shares*/
    addShare : (data) => {
        return axios.post(urlPrefix+'/shares',data)
    },
    getShares : () => {
        return axios.get(urlPrefix+'/shares')
    },
    getOneShare : (id) => {
        return axios.get(urlPrefix+'/shares/'+id)
    },
    updateShare : (id,data) => {
        return axios.put(urlPrefix+'/shares/'+id,data)    
    },
    deleteShare : (id) => {
        return axios.delete(urlPrefix + '/shares/' + id)
    },

    /*Image File Upload*/
    uploadFile : (formData) => {
        var settings = { headers: {'Content-Type': 'multipart/form-data' }}
        return axios.post(urlPrefix+'/upload',formData,settings)
    }
}

export default API
