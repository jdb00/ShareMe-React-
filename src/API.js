import axios from 'axios';

var urlPrefix = 'http://localhost:4020/api'

var API = {
    getUsers : () => {
        return axios.get(urlPrefix+'/users')
    },
    getUser : (id) => {
        return axios.get(urlPrefix+'/users/'+id)
    },
    addUser : (data) => {
        return axios.post(urlPrefix+'/users/',data)
    },
    deleteUser : (id) => {
        return axios.delete(urlPrefix+'/users'+id)
    },
    deleteShares : (id) => {
        return axios.delete(urlPrefix+'/shares/'+id)
    },
    addShare : (data) => {
        return axios.post(urlPrefix+'/shares',data)
    },
    getShares : () => {
        return axios.get(urlPrefix+'/shares')
    }
}

export default API
