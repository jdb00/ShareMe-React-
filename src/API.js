import axios from 'axios';

var urlPrefix = 'http://localhost:4020/api'

var API = {
    serverURL: 'http://localhost:4020/',
    defaultImage: 'http://localhost:4020/1600663352334default-image.jpg',
    defaultUser: 'http://localhost:4020/1600664160374default-user.png',

    getUsers : () => {
        return axios.get(urlPrefix+'/users')
    },
    getUser : (id) => {
        return axios.get(urlPrefix+'/users/'+id)
    },
    updateUser : (id, data) =>{
        return axios.put(urlPrefix+ '/users/'+ id, data)
    },
    addUser : (data) => {
        return axios.post(urlPrefix+'/users/',data)
    },
    deleteUser : (id) => {
        return axios.delete(urlPrefix+'/users'+id)
    },
    addShare : (data) => {
        return axios.post(urlPrefix+'/shares/',data)
    },
    getShares : () => {
        return axios.get(urlPrefix+'/shares')
    },
    getShare : (id) => {
        return axios.get(urlPrefix+'/shares/'+id)
    },
    deleteShare : (id) => {
        return axios.delete(urlPrefix + '/shares/' + id)
    },
    updateShare : (id, data) => {
        return axios.put(urlPrefix + '/shares/' + id,data)
    },
    addComment : (data) =>{
        return axios.post(urlPrefix + '/comments',data)
    },
    authenticate : (data) => {
        return axios.post(urlPrefix+'/users/authenticate',data)          
    },
    uploadFile : (formData) => {
        var settings = { headers: {'Content-Type': 'multipart/form-data' }}
        return axios.post(urlPrefix+'/upload', formData, settings)
    }
}

export default API
